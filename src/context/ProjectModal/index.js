import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function ProjectModal({ icon, altText, title, snippet, tech, description, githubURL, liveLink }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)} id=''>View</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='project-container'>
            <div>
              <img src={icon} alt={altText} height='80' />
            </div>
            <div>
              {title}
            </div>
            <div>
              {snippet}
            </div>
            <div className='tech-used'>
              <p>Tech</p>
              <p>{tech}</p>
            </div>
            <div>
              {description}
            </div>
            <button>
              <a href={githubURL}>GitHub</a>
            </button>
            <button>
              <a href={liveLink}>Live Link</a>
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProjectModal;