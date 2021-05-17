import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function ProjectModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)} id=''>View</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
        </Modal>
      )}
    </div>
  );
}

export default ProjectModal;