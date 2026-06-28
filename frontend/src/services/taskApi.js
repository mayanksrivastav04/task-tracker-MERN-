import axios from "axios";

const API_URL = "https://task-tracker-backend-wu27.onrender.com/api/tasks";

export const getTasks = () => {
  return axios.get(API_URL);
};

export const createTask = (taskData) => {
  return axios.post(API_URL, taskData);
};

export const updateTask = (id, taskData) => {
  return axios.put(`${API_URL}/${id}`, taskData);
};

export const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};