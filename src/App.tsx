
import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import { Header } from './components/header'
import { TaskEmpty } from './components/taskEmpty'
import { Task } from './components/task'

function App() {
  

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.taskForm}>
          <input name='task' type='text' placeholder='Adicione uma nova tarefa' />
          <button type='submit'>Criar <PlusCircle size={16} /></button>
        </form>

        <div className={styles.taskStatus}>
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluídas <span>0</span></p>
        </div>

        {/* <TaskEmpty /> */}
        <Task />
      </main>
    </div>
  )
}

export default App
