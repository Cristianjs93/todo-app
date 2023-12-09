import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { modifyTodo } from '../../../store/redux/slices/todosSlice';
import './index.scss';

function CheckTodo({ todo }) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { id } = event.target;
    dispatch(modifyTodo(id));
  };

  return (
    <input
      type="checkbox"
      className="check-todo"
      id={todo._id}
      checked={todo.completed}
      value={todo.completed}
      onChange={handleChange}
    />
  );
}

CheckTodo.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CheckTodo;
