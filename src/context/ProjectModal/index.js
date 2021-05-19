import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function ProjectModal({ icon, altText, title, snippet, tech, description, githubURL, liveLink, images }) {
  const [showModal, setShowModal] = useState(false);
  const viewProject = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  const exitProject = () => {
    setShowModal(false);
    document.body.style.overflow = 'scroll';
  }

  return (
    <div className='project-modal'>
      <button className='view-btn' onClick={viewProject}>View</button>
      {showModal && (
        <Modal onClose={exitProject}>
          <div className='project-container'>
            <div className='overview'>
              <img src={icon} alt={altText} height='80' />
              <div>
                <h4>{title}</h4>
                <p>{snippet}</p>
              </div>
              <button className='exit-modal-btn' onClick={exitProject}>X</button> 
            </div>
            <hr />
            <div className='tech-used'>
              <h4>Tech</h4>
              <p>{tech}</p>
            </div>
            <div className='project-gallery'>
              {/* Create image carousel */}
              {images.map(image => {
                return (
                  <img className='project-image' src={image} alt={altText} height='480' />
                )
              })}
            </div>
            <div className='description'>
              {description}
            </div>
            <button className='github'>
              <a href={githubURL}>GitHub</a>
            </button>
            <button className='live-link'>
              <a href={liveLink}>Live Link</a>
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProjectModal;