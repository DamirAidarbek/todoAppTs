import React from 'react'

import { useTodoStore } from '../../data/stores/useTodoStore'
import { AddForm } from '../components/AddForm'
import { TodoList } from '../components/TodoList'

import styles from './index.module.scss'

export const App: React.FC = () => {
    const [tasks, createTask, editTask, removeTask] = useTodoStore(state => [
        state.tasks,
        state.createTask,
        state.editTask,
        state.removeTask
    ])
    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            <section>
                <AddForm onAdd={createTask} />
            </section>
            <section>
                {!tasks.length && (
                    <h2 className={styles.articleText}>There is no one task</h2>
                )}
                {tasks.map(task => {
                    return (
                        <TodoList
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            editTask={editTask}
                            removeTask={removeTask}
                        />
                    )
                })}
            </section>
        </article>
    )
}
