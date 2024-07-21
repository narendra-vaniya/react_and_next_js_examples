import React, { useState } from "react";
import { getTodaysDate } from "../../utiles/date_utile";
import AddNewTaskFrom from "../add_or_new_from/add_or_update_from";
import styles from "./app_header.module.css";
import { TaskType } from "../../types/task.type";

function AppHeader({
  onAddNewTaskBtnClick,
}: {
  onAddNewTaskBtnClick: () => void;
}) {
  return (
    <div className={styles.app_header}>
      <div className={styles.app_header_left_sec}>
        <p className={styles.app_header_left_title}>ToDo List</p>
        <p className={styles.app_header_left_sub_title}>{getTodaysDate()}</p>
      </div>
      <button className={styles.new_task_btn} onClick={onAddNewTaskBtnClick}>
        New Task
      </button>
    </div>
  );
}

export default AppHeader;
