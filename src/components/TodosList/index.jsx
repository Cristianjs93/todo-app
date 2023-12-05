import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTodos, modifyTodo } from '../../../store/redux/slices/todosSlice';
import './index.scss';
import DeleteModal from '../DeleteModal';

function TodosList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const [openModal, setOpenModal] = useState(false);
  const [todoId, setTodoId] = useState('');

  useEffect(() => {
    dispatch(listTodos());
  }, []);

  const handleOpenModal = (event) => {
    if (!openModal) {
      const { id } = event.target;
      setTodoId(id);
    }
    setOpenModal(!openModal);
  };

  const handleChange = (event) => {
    const { id } = event.target;
    dispatch(modifyTodo(id));
  };

  return (
    <div className="todos-container">
      <ul className="todos-container__list">
        {todos.map((todo) => (
          <li key={todo._id} className="todos-container__list__item">
            <input
              type="checkbox"
              className="todos-container__check"
              id={todo._id}
              checked={todo.completed}
              value={todo.completed}
              onChange={handleChange}
            />
            <h2 className="todos-container__title">{todo.title}</h2>
            <span className={!todo.completed ? 'todos-container__red' : 'todos-container__green'}>
              {!todo.completed ? 'Pending' : 'Completed'}
            </span>
            <button
              type="button"
              className="todos-container__button-trash"
              aria-label="delete"
              onClick={handleOpenModal}
            >
              <i id={todo._id} className="bi bi-trash3" />
            </button>
          </li>
        ))}
      </ul>
      {openModal && <DeleteModal todoId={todoId} onOpenModal={handleOpenModal} />}
    </div>
  );
}

export default TodosList;
