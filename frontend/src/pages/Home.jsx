import React from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useState, useEffect } from "react";
import axios from "axios"
import { getTasks } from "../services/taskApi";


const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    // const res = await axios.get("http://localhost:3000/api/tasks");
    const res = await getTasks()
    setTasks(res.data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <section className="bg-black min-h-screen w-full flex flex-col md:flex-col items-center lg:flex-row  gap-10 pt-5  lg:pl-5 border-2 overflow-y-auto lg:overflow-hidden">
      <TaskForm
        fetchTasks={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <TaskList
        tasks={tasks}
        fetchTasks={fetchTasks}
        setEditingTask={setEditingTask}
      />
    </section>
  );
};

export default Home;
