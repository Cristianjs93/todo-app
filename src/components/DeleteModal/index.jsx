import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../../store/redux/slices/todosSlice';
import './index.scss';

function DeleteModal({ todoId, onOpenModal }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(todoId));
    onOpenModal();
  };

  return (
    <div className="delete-modal">
      <div className="delete-modal__container">
        <p className="delete-modal__message">Are you sure on deleting this todo?</p>
        <div className="delete-modal__buttons">
          <button
            className="delete-modal__confirm-button"
            type="button"
            onClick={handleDelete}
          >
            Confirm
          </button>
          <button
            className="delete-modal__cancel-button"
            type="button"
            onClick={onOpenModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  todoId: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default DeleteModal;
