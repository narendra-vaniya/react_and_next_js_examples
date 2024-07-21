import { useEffect, useState } from "react";
import { DropDownComponent } from "../dropdown/dropdown";
import { IconCircleXFilled } from "@tabler/icons-react";
import styles from "./add_or_new_from.module.css";
import { categories } from "../../utiles/app_constant";
import { DropdownType } from "../../types/dropdown.type";
import { TaskType } from "../../types/task.type";

function AddNewTaskFrom({
  onCloseBtnClick,
  isOpenNewTaskDialog,
  addNewTask,
  updateTask,
  task,
}: {
  onCloseBtnClick: () => void;
  isOpenNewTaskDialog: boolean;
  addNewTask: (task: TaskType) => void;
  updateTask: (task: TaskType) => void;
  task: TaskType | null;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (task != null) {
      setTitle(task.title);
      setDescription(task.description);
      setCategory(task.category);
    }
  }, []);

  function updateTitle(event: any) {
    setTitle((e) => event.target.value);
  }
  function updateDescription(event: any) {
    setDescription((e) => event.target.value);
  }

  function updateCategory(cat: DropdownType) {
    setCategory((e) => cat.id);
  }

  function onSubmitClick() {
    const newTask: TaskType = {
      title: title.trim(),
      description: description.trim(),
      category: category,
      id: task?.id ?? Date.now().toString(),
    };
    if (task == null) addNewTask(newTask);
    if (task != null) updateTask(newTask);
    onCloseBtnClick();
  }

  return (
    <div
      className={
        isOpenNewTaskDialog
          ? styles.add_new_task_dialog_show
          : styles.add_new_task_dialog_hide
      }
    >
      <div className={styles.add_new_task_inner_dialog}>
        <div className={styles.add_new_task_inner_title_row}>
          <div>
            <p className={styles.add_new_task_inner_title}>
              {task == null ? "Add New Task" : "Update Your Task"}
            </p>
            <p className={styles.add_new_task_inner_subtitle}>
              {task == null
                ? " Add a new task by entering a title and description, selecting tags."
                : "Update your task details by entering a title and description, selecting tags."}
            </p>
          </div>
          <IconCircleXFilled
            size={22}
            color="#aeb2b9"
            style={{ cursor: "pointer" }}
            onClick={onCloseBtnClick}
          />
        </div>
        <div className={styles.add_new_task_form}>
          <div>
            <label htmlFor="task_name">Task Title</label>
            <input
              type="text"
              placeholder="Enter the task title here..."
              id="task_name"
              value={title}
              onChange={(e) => updateTitle(e)}
            />
          </div>
          <div>
            <label htmlFor="task_des">Description</label>
            <textarea
              cols={40}
              rows={7}
              placeholder="Provide a brief description of the task..."
              id="task_des"
              onChange={(e) => updateDescription(e)}
              value={description}
            />
          </div>

          <DropDownComponent
            options={categories}
            onChange={(e) => updateCategory(e)}
            selectedValue={category}
            key={Date.now().toLocaleString()}
          />

          <button className={styles.submit_btn} onClick={onSubmitClick}>
            {task == null ? "Submit" : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewTaskFrom;
