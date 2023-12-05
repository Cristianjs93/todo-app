import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { clearCompletedTodos } from '../../../store/redux/slices/todosSlice';
import './index.scss';

function ClearTodos() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const deleteTodos = () => {
    const completedTodos = todos.filter((todo) => todo.completed)
      .map((todo) => todo._id);
    dispatch(clearCompletedTodos(completedTodos));
  };

  return (
    <div className="clear-box">
      <button type="button" className="clear-box__button" onClick={deleteTodos}>Clear all done</button>
    </div>
  );
}

export default ClearTodos;
