import React from 'react';
import PropTypes from 'prop-types';
import ThrashButton from '../ThrashButton';
import CheckTodo from '../CheckTodo';
import './index.scss';

function TodoItem({ todo }) {
  return (
    <li key={todo._id} className="todo-item">
      <CheckTodo todo={todo} />

      <h2 className="todo-item__title">{todo.title}</h2>
      <span className={!todo.completed ? 'todo-item__status--red' : 'todo-item__status--green'}>
        {!todo.completed ? 'Pending' : 'Completed'}
      </span>

      <ThrashButton id={todo._id} />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
