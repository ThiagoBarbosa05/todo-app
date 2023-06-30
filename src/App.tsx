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

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

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

  function taskChecked(id: string, isChecked: boolean) {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: isChecked };
      }
      return task;
    });
    setTasks(updateTasks);
  }

  const totalTasks = tasks.length;
  const isNewTaskEmpty = newTask.length === 0;
  const totalCompletedTasks = tasks.filter((task) => task.isCompleted).length;

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
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.taskStatus}>
          <p>
            Tarefas criadas <span>{totalTasks}</span>
          </p>
          <p>
            Concluídas{" "}
            {totalTasks === 0 || totalCompletedTasks === 0 ? (
              <span>0</span>
            ) : (
              <span>
                {totalCompletedTasks} de {totalTasks}
              </span>
            )}
          </p>
        </div>

        {/* <TaskEmpty /> */}
        {totalTasks === 0 ? (
          <TaskEmpty />
        ) : (
          <section className={styles.taskContainer}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onDeletedTask={deleteTask}
                onTaskChecked={taskChecked}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
