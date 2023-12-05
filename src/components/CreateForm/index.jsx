import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../store/redux/slices/todosSlice';
import './index.scss';

function CreateForm() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState({
    title: '',
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setNewTodo({
      title: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo({
      title: '',
    });
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="create-form__input-box">
        <input
          type="text"
          name="taskName"
          className="create-form__input-box__input"
          placeholder="Insert new task"
          value={newTodo.title}
          onChange={handleChange}
        />
        <button type="submit" className="create-form__add-button">Add</button>
      </div>
    </form>
  );
}

export default CreateForm;
