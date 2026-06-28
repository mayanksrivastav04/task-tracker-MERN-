import React from "react";
import axios from "axios";
import { deleteTask, updateTask } from "../services/taskApi";

const TaskCard = ({ task, fetchTasks, setEditingTask }) => {
  const handleDelete = async () => {
    // console.log(task._id)
    await deleteTask(task._id);

    fetchTasks();
  };

  const handleMarkCompleted = async () => {
    try {
      await updateTask(task._id, {
        ...task,
        status: "completed",
      });
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-60 h-fit max-w-75 border-2 px-2 py-2 bg-[#212121] rounded-xl">
      <div className="flex justify-between border-b border-[#696969] p-2">
        <h3
          className={`font-semibold px-2 py-1 rounded-full text-sm ${
            task.priority === "high"
              ? " text-red-400"
              : task.priority === "medium"
                ? " text-yellow-300"
                : " text-green-400"
          }`}
        >
          {task.priority}
        </h3>
        <h3
          className={`bg-[#442D21] text-[#ED7B37] rounded-xl px-1 ${
            task.status === "completed"
              ? "bg-green-900 text-green-400"
              : "bg-[#442D21] text-[#ED7B37]"
          } `}
        >
          {task.status}
        </h3>
      </div>
      <div className="flex flex-col border-b border-[#696969] mb-5 py-3  p-2 gap-2">
        <h2 className="text-xl font-bold text-white">{task.title}</h2>
        <p className=" text-[#989898]">{task.description}</p>
      </div>
      <button
        onClick={handleMarkCompleted}
        className="border border-green-400 py-1 px-2 rounded-xl w-full text-green-400 cursor-pointer"
      >
        Mark as Completed
      </button>
      <div className="flex justify-between p-2 ">
        <button
          onClick={() => setEditingTask(task)}
          className="bg-[#3B82F6] text-white px-3 hover:bg-[#1461db] rounded-xs"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-[#EF4444] text-white px-2 hover:bg-[#df2323] rounded-xs"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
