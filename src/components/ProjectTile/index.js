import ProjectModal from '../../context/ProjectModal';

function ProjectTile({ icon, altText, title, snippet, tech, description, githubURL, liveLink }) {
  return (
    <div className='project-tile'>
      <div className='project-icon'>
        <img src={icon} alt={altText} height='80' />
      </div>
      <div className='project-glimpse'>
        <h4>{title}</h4>
        <p>{snippet}</p>
      </div>
      <ProjectModal
        icon={icon}
        title={title}
        altText={altText}
        snippet={snippet}
        tech={tech}
        description={description}
        githubURL={githubURL}
        liveLink={liveLink}
      />
    </div>
  )
}

export default ProjectTile;