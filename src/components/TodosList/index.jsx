import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTodos } from '../../../store/redux/slices/todosSlice';
import TodoItem from '../TodoItem';
import './index.scss';

function TodosList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);

  return (
    <div className="todos-container">
      <ul className="todos-container__list">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodosList;
