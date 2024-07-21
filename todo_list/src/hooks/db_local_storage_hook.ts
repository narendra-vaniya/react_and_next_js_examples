import { useState, useEffect } from "react";
import { TaskType } from "../types/task.type";

export function useDBLocalStorage(key: string) {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addNewTask = (task: TaskType) => {
    const newTaskList = [...tasks, task];
    localStorage.setItem(key, JSON.stringify(newTaskList));
    setTasks(newTaskList);
  };

  const updateTask = (task: TaskType) => {
    const filterTasked = tasks.filter((e) => e.id != task.id);
    const newTaskList = [...filterTasked, task];
    localStorage.setItem(key, JSON.stringify(newTaskList));
    setTasks(newTaskList);
  };

  useEffect(() => {
    const taskJson = localStorage.getItem(key);
    if (taskJson) {
      setTasks(JSON.parse(taskJson));
    }
  }, []);

  return [tasks, addNewTask,updateTask] as const;
}
