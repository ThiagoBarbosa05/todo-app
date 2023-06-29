import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { Header } from "./components/header";
import { TaskEmpty } from "./components/taskEmpty";
import { v4 as uuidv4 } from "uuid";
import { Task, TaskType } from "./components/task";

// const tasks: TaskType[] = [
//   {
//     id: uuidv4(),
//     content: ''
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut beatae nobis doloremque dolores maxime facere a praesentium explicabo ullam, fugiat ab, perspiciatis maiores ipsum veritatis modi optio mollitia quibusdam",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut beatae nobis doloremque dolores maxime facere a praesentium explicabo ullam, fugiat ab, perspiciatis maiores ipsum veritatis modi optio mollitia quibusdam",
//     isCompleted: false,
//   },
// ];

const task: TaskType[] = [];

function App() {
  const [tasks, setTasks] = useState(task);
  const [newTask, setNewTask] = useState("");

  function handleChangeNewtask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      { id: uuidv4(), content: newTask, isCompleted: false },
    ]);
    setNewTask("");
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => id !== task.id);

    setTasks(tasksWithoutDeletedOne);
  }

  const totalTasks = tasks.length;

  console.log(newTask);

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
          <input
            name="task"
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleChangeNewtask}
            value={newTask}
          />
          <button type="submit">
            Criar <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.taskStatus}>
          <p>
            Tarefas criadas <span>{totalTasks}</span>
          </p>
          <p>
            Concluídas <span>0</span>
          </p>
        </div>

        {/* <TaskEmpty /> */}
        {totalTasks === 0 ? (
          <TaskEmpty />
        ) : (
          <section className={styles.taskContainer}>
            {tasks.map((task) => (
              <Task key={task.id} task={task} onDeletedTask={deleteTask} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
