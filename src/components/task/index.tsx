import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

export interface TaskType {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType
  onDeletedTask: (taskId: string) => void
  onTaskChecked: (id: string, isChecked: boolean) => void
}

export function Task({task, onDeletedTask, onTaskChecked}: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
 

  function handleCheckedChange() {
    onTaskChecked(task.id, !isChecked);
    setIsChecked(!isChecked);
  }

 function handleDeletedTask() {
  onDeletedTask(task.id)
 }


  return (
    
      <div className={styles.task}>
        <div className={styles.checkContainer}>
          <label>
            <input type="checkbox" onChange={handleCheckedChange} />
            <span className={styles.checkmark}></span>
          </label>
        </div>

        <p className={isChecked ? styles.checked : styles.content}>
          {task.content}
        </p>

        <button onClick={handleDeletedTask}>
          <Trash size={24} />
        </button>
      </div>
  );
}

