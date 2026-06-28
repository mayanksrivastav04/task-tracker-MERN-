import React from "react";
import TaskCard from "./TaskCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getTasks } from "../services/taskApi";

const TaskList = ({ tasks, fetchTasks, setEditingTask }) => {
    
  return (
    <div className=" border-2justify-center  lg:justify-start w-full lg:w-[70%] lg:h-[90vh] h-full p-6  lg:px-10 flex flex-wrap flewrap gap-5 overflow-y-auto content-start">
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
            setEditingTask={setEditingTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
