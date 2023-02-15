import React, { useRef, useState, useEffect } from 'react'

import styles from './index.module.scss'

interface TodoList {
    editTask: (id: string, title: string) => void
    removeTask: (id: string) => void
    title: string
    id: string
}

export const TodoList: React.FC<TodoList> = ({
    editTask,
    removeTask,
    id,
    title
}) => {
    const [isChecked, setIsChecked] = useState(false)
    const [editMod, setEditMod] = useState(false)
    const [editModValue, setEditModValue] = useState(title)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef?.current?.focus()
    }, [editMod])

    const editTaskHandler = () => {
        editTask(id, editModValue)
        setEditMod(false)
    }

    return (
        <div className={styles.todoList}>
            {editMod ? (
                <>
                    <label className={styles.todoListLabel}>
                        <input
                            type="checkbox"
                            disabled={editMod}
                            className={styles.todoListCheckbox}
                            checked={isChecked}
                            onChange={evt => {
                                setIsChecked(evt.target.checked)
                            }}
                        />
                        <input
                            type="text"
                            ref={inputRef}
                            className={styles.todoListEditText}
                            value={editModValue}
                            onChange={evt => setEditModValue(evt.target.value)}
                            onKeyDown={evt => {
                                if (evt.key === 'Enter') editTaskHandler()
                            }}
                        />
                    </label>
                    <button
                        aria-label="check"
                        className={styles.todoListCheck}
                        onClick={() => editTaskHandler()}
                    />
                </>
            ) : (
                <>
                    <label className={styles.todoListLabel}>
                        <input
                            type="checkbox"
                            disabled={editMod}
                            className={styles.todoListCheckbox}
                            checked={isChecked}
                            onChange={evt => {
                                setIsChecked(evt.target.checked)
                            }}
                        />
                        <h3 className={styles.todoListTitle}>{title}</h3>
                    </label>
                    <button
                        aria-label="edit"
                        className={styles.todoListEdit}
                        onClick={() => setEditMod(true)}
                    />
                </>
            )}
            <button
                aria-label="remove"
                className={styles.todoListRemove}
                onClick={() => removeTask(id)}
            />
        </div>
    )
}
