import { IconCircleCheckFilled, IconEdit } from "@tabler/icons-react";
import styles from "./task_list_view.module.css";

import { useEffect, useState } from "react";
import { TaskType } from "../../types/task.type";

function TaskListView({
  tasks,
  selectedCategories,
  onEditTaskBtnClick,
}: {
  tasks: TaskType[];
  selectedCategories: string;
  onEditTaskBtnClick:(e:TaskType)=>void;
}) {
  function smallDescription(e: string) {
    if (e.length < 80) return e;
    return e.substring(0, 80) + "...";
  }

  function getTask() {
    return tasks.filter((e) => e.category == selectedCategories);
  }

  return (
    <div className={styles.task_list_view}>
      {getTask().length == 0 || getTask() === null ? (
        <div className={styles.no_task_found}>
          <img src="/no_task_found.png" />
          <p>No Task found</p>
        </div>
      ) : null}

      {getTask().map((e) => (
        <div className={styles.task_list_tile} key={e.id}>
          <div className={styles.task_list_title_row}>
            <p>{e.title}</p>
            <IconEdit size={18} color="#0863fe" onClick={()=>onEditTaskBtnClick(e)} />
          </div>
          <div className={styles.task_list_subtitle_row}>
            <p>{smallDescription(e.description)}</p>
         
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskListView;
