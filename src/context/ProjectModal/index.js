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
      <button onClick={viewProject}>View</button>
      {showModal && (
        <Modal onClose={exitProject}>
          <div className='project-container'>
            <div className='fixed'>
              <img src={icon} alt={altText} height='80' />
            </div>
            <div className='fixed'>
              {title}
            </div>
            <div className='fixed'>
              {snippet}
            </div>
            <div className='tech-used fixed'>
              <p>Tech</p>
              <p>{tech}</p>
            </div>
            <div className='project-gallery'>
              {images.map(image => {
                return (
                  <img className='project-image' src={image} alt={altText} height='420' />
                )
              })}
            </div>
            <div className='fixed'>
              {description}
            </div>
            <button className='fixed'>
              <a href={githubURL}>GitHub</a>
            </button>
            <button className='fixed'>
              <a href={liveLink}>Live Link</a>
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProjectModal;