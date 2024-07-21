import React from "react";
import { categories } from "../../utiles/app_constant";
import styles from "./task_categories.module.css";
function TaskCategories({
  onCategorySelect,
  selectedCategories,
}: {
  onCategorySelect: (id: string) => void;
  selectedCategories: string;
}) {
  return (
    <div className={styles.task_categories_list_row}>
      {categories.map((e) => (
        <p
          key={e.id}
          className={
            selectedCategories === e.id
              ? styles.selected_categories
              : styles.unselected_categories
          }
          onClick={() => onCategorySelect(e.id)}
        >
          {e.title}
        </p>
      ))}
    </div>
  );
}

export default TaskCategories;
