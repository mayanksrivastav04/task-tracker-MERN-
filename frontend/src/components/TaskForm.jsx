import React from "react";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createTask, updateTask } from "../services/taskApi";

const TaskForm = ({ fetchTasks, editingTask, setEditingTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingTask) {
        await updateTask(editingTask._id,formData)
      } else {
        await createTask(formData);
      }
      await fetchTasks();

      setEditingTask(null);

      setFormData({
        title: "",
        description: "",
        priority: "medium",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
      });
    }
  }, [editingTask]);

  return (
    <>
      <div className="w-[80%] h-[70%] lg:w-[30%]  border-[#696969] border-2">
        <Header />
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col border-2  py-5 px-10 gap-4"
        >
          <input
            className="border-2 py-2 px-2 w-full rounded-md bg-white "
            type="text"
            placeholder="enter title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            className="border-2 w-full py-2 px-2 rounded-md bg-white"
            rows={4}
            cols={50}
            placeholder="default description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <select
            className="bg-white"
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
          >
            <option value={"low"}>Low</option>
            <option value={"medium"}>Medium</option>
            <option value={"high"}>High</option>
          </select>
          <button className="bg-green-500 py-2 px-8 rounded-2xl hover:bg-green-600 cursor-pointer active:scale-95">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
