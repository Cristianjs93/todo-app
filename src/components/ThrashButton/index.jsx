import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeleteModal from '../DeleteModal';
import './index.scss';

function ThrashButton({ id }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <button
        type="button"
        className="trash-button"
        aria-label="delete"
        onClick={handleOpenModal}
      >
        <i id={id} className="bi bi-trash3" />
      </button>
      {openModal && <DeleteModal id={id} onOpenModal={handleOpenModal} />}
    </>

  );
}

ThrashButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ThrashButton;
