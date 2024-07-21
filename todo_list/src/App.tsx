import { useState } from "react";
import TaskCategories from "./components/task_categories/task_categories";
import TaskListView from "./components/task_list/task_list_view";
import AppHeader from "./components/app_header/app_header";
import { useDBLocalStorage } from "./hooks/db_local_storage_hook";
import AddNewTaskFrom from "./components/add_or_new_from/add_or_update_from";
import { TaskType } from "./types/task.type";

function App() {
  const [selectedCategories, setCategories] = useState("today_task");
  const [tasks, addNewTask, updateTask] = useDBLocalStorage("all_task");

  const [isOpenNewTaskDialog, toggleNewTaskDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  function onNewOrEditTaskBtnClick(e: TaskType | null) {
    setSelectedTask((_) => e);
    toggleNewTaskDialog((e) => !e);
  }

  ///
  function onToggleNewTaskDialog() {
    toggleNewTaskDialog((e) => !e);
  }

  ///
  function onCategorySelects(id: string) {
    setCategories(id);
  }

  return (
    <>
      <div className="app">
        <AppHeader onAddNewTaskBtnClick={() => onNewOrEditTaskBtnClick(null)} />
        <div className="app_body">
          <TaskCategories
            onCategorySelect={onCategorySelects}
            selectedCategories={selectedCategories}
          />
          <TaskListView
            tasks={tasks}
            selectedCategories={selectedCategories}
            onEditTaskBtnClick={(e) => onNewOrEditTaskBtnClick(e)}
          />
          <AddNewTaskFrom
            onCloseBtnClick={onToggleNewTaskDialog}
            isOpenNewTaskDialog={isOpenNewTaskDialog}
            addNewTask={addNewTask}
            updateTask={updateTask}
            key={Date.now().toLocaleString()}
            task={selectedTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
