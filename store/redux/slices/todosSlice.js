/* eslint-disable no-param-reassign  */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import
{
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteManyTodo,
} from '../../../src/api/todos';
import toast from '../../../src/utils/toast';

const initialState = {
  todos: [],
  error: null,
  status: 'idle',
};

export const listTodos = createAsyncThunk(
  'todos/listTodos',
  async () => {
    try {
      const { data } = await getAllTodos();
      return data;
    } catch (error) {
      toast.fire({
        icon: 'error',
        title: error.message,
      });
      throw new Error(error.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (newTodo) => {
    try {
      const { message, data } = await createTodo(newTodo);

      if (typeof data !== 'string') {
        toast.fire({
          icon: 'success',
          title: message,
        });
      }

      return data;
    } catch (error) {
      toast.fire({
        icon: 'error',
        title: error.message,
      });
      throw new Error(error.message);
    }
  },
);

export const modifyTodo = createAsyncThunk(
  'todos/modifyTodo',
  async (id) => {
    try {
      const { message, data } = await updateTodo(id);

      if (typeof data !== 'string') {
        toast.fire({
          icon: 'success',
          title: message,
        });
      }

      return data;
    } catch (error) {
      toast.fire({
        icon: 'error',
        title: error.message,
      });
      throw new Error(error.message);
    }
  },
);

export const removeTodo = createAsyncThunk(
  'todos/removeTodo',
  async (id) => {
    try {
      const { message, data } = await deleteTodo(id);

      if (typeof data !== 'string') {
        toast.fire({
          icon: 'success',
          title: message,
        });
      }

      return data;
    } catch (error) {
      toast.fire({
        icon: 'error',
        title: error.message,
      });
      throw new Error(error.message);
    }
  },
);

export const clearCompletedTodos = createAsyncThunk(
  'todos/clearCompletedTodos',
  async (completedIds) => {
    try {
      const { message, data } = await deleteManyTodo(completedIds);

      if (typeof data !== 'string') {
        toast.fire({
          icon: 'success',
          title: message,
        });
      }

      return data;
    } catch (error) {
      toast.fire({
        icon: 'error',
        title: error.message,
      });
      throw new Error(error.message);
    }
  },
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(listTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(listTodos.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.todos = payload;
      })
      .addCase(listTodos.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      })
      .addCase(addTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.todos = payload._id ? [...state.todos, payload] : state.todos;
        state.status = 'idle';
      })
      .addCase(addTodo.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      })
      .addCase(modifyTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(modifyTodo.fulfilled, (state, { payload }) => {
        state.todos = state.todos.map((todo) => (todo._id === payload._id
          ? { ...todo, completed: payload.completed }
          : todo
        ));
        state.status = 'idle';
      })
      .addCase(modifyTodo.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      })
      .addCase(removeTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.todos = state.todos.filter((todo) => todo._id !== payload._id);
        state.status = 'idle';
      })
      .addCase(removeTodo.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      })
      .addCase(clearCompletedTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(clearCompletedTodos.fulfilled, (state, { payload }) => {
        state.todos = state.todos.filter((todo) => (payload.completedIds.includes(todo._id)
          ? null
          : todo));
        state.status = 'idle';
      })
      .addCase(clearCompletedTodos.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      });
  },
});

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
