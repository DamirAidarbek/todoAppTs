import React, { useState } from 'react'

import styles from './index.module.scss'

interface addForm {
    onAdd: (title: string) => void
}

export const AddForm: React.FC<addForm> = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('')

    const onAddHandler = () => {
        onAdd(inputValue)
        setInputValue('')
    }

    return (
        <div className={styles.addForm}>
            <input
                type="text"
                className={styles.addFormInput}
                value={inputValue}
                placeholder="Type here ..."
                onChange={evt => {
                    setInputValue(evt.target.value)
                }}
                onKeyDown={evt => {
                    if (evt.key === 'Enter') {
                        onAddHandler()
                    }
                }}
            />
            <button
                aria-label="add"
                className={styles.addFormButton}
                onClick={() => {
                    onAddHandler()
                }}
            />
        </div>
    )
}
