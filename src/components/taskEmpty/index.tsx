import {ClipboardText} from 'phosphor-react'
import styles from './TaskEmpty.module.css'

export function TaskEmpty() {
  return (
    <section className={styles.tasksEmptyBox}>
        <div>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    </section>
  )
}