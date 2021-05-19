import pupprIcon from '../../images/puppr/puppr-icon.png';
import home from '../../images/puppr/home.png';
import explore from '../../images/puppr/explore.png';
import createAlbum from '../../images/puppr/create-album.png';
import commentsSection from '../../images/puppr/comments-section.png';
import ggPlaysHome from '../../images/ggPlays/ggPlays-home.png';

import ggPlaysIcon from '../../images/ggPlays/ggPlays-icon.png';
import './Portfolio.css';
import ProjectModal from '../../context/ProjectModal';

function Portfolio() {
  return (
    <div id='portfolio'>
      <h3>Portfolio</h3>
      <div id='portfolio-container'>
        <div className='overview'>
          <img src={pupprIcon} alt='' height='80' />
          <div className='overview-title-snippet'>
            <h4>Puppr</h4>
            <p>very brief description</p>
          </div>
        </div>
        <ProjectModal
          icon={pupprIcon}
          altText='Puppr Icon showing dog'
          title='Puppr'
          snippet='very brief description'
          tech={['React', 'Redux', 'Express', 'JavaScript', 'HTML', 'CSS']}
          description='test test test'
          githubURL='https://github.com/trnle/puppr'
          liveLink='https://pupproni.herokuapp.com/'
          images={[home]}
        />
        <div className='overview'>
          <img src={ggPlaysIcon} alt='' height='80' />
          <div className='overview-title-snippet'>
            <h4>ggPlays</h4>
            <p>very brief description</p>
          </div>
        </div>
        <ProjectModal
          icon={ggPlaysIcon}
          altText='ggPlays icon'
          title='ggPlays'
          snippet='very brief description'
          tech={['Sequelize', 'Express', 'JavaScript', 'HTML', 'CSS']}
          description='test test test'
          githubURL='https://github.com/Hieu-Ma/ggplays/'
          liveLink='https://ggplays.herokuapp.com/'
          images={[ggPlaysHome]}
        />
      </div>
    </div>
   
  )
}

export default Portfolio;