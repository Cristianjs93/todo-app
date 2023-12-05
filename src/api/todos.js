import axios from 'axios';
import errorHandler from '../utils/errorHandler';

const URL = `${import.meta.env.VITE_BASE_URL}`;

export const getAllTodos = async () => {
  try {
    const { data } = await axios.get(`${URL}/api/todo`);
    return data;
  } catch (error) {
    const message = errorHandler(error);
    throw new Error(message);
  }
};

export const createTodo = async (todo) => {
  try {
    const { data } = await axios.post(`${URL}/api/todo`, todo);
    return data;
  } catch (error) {
    const message = errorHandler(error);
    throw new Error(message);
  }
};

export const updateTodo = async (id) => {
  try {
    const { data } = await axios.put(`${URL}/api/todo/update/${id}`);
    return data;
  } catch (error) {
    const message = errorHandler(error);
    throw new Error(message);
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}/api/todo/delete/${id}`);
    return data;
  } catch (error) {
    const message = errorHandler(error);
    throw new Error(message);
  }
};

export const deleteManyTodo = async (completedIds) => {
  try {
    const { data } = await axios.delete(`${URL}/api/todo/delete`, {
      data: {
        completedIds,
      },
    });

    return data;
  } catch (error) {
    const message = errorHandler(error);
    throw new Error(message);
  }
};
