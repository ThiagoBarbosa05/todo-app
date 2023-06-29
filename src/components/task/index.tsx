import { Trash } from "phosphor-react";
import { useState, ChangeEvent } from "react";
import styles from "./Task.module.css";

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckedChange() {
    setIsChecked(!isChecked);
  }

  console.log(isChecked);

  return (
    <section className={styles.taskBox}>
      <div className={styles.task}>
        <div className={styles.checkContainer}>
          <label>
            <input type="checkbox" onChange={handleCheckedChange} />
            <span className={styles.checkmark}></span>
          </label>
        </div>

        <p className={isChecked ? styles.checked : styles.content}>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>

        <button>
          <Trash size={24} />
        </button>
      </div>
    </section>
  );
}
