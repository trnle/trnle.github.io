import pupprIcon from '../../images/puppr/puppr-icon.png';
import home from '../../images/puppr/home.png';
// import explore from '../../images/puppr/explore.png';
// import createAlbum from '../../images/puppr/create-album.png';
// import commentsSection from '../../images/puppr/comments-section.png';
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
          <img src={pupprIcon} alt='' height='70' />
          <div className='title-snippet'>
            <h4>Puppr</h4>
            <p>Photo sharing application.</p>
          </div>
          <div className='view-modal'>
            <ProjectModal
              icon={pupprIcon}
              altText='Puppr Icon showing dog'
              title='Puppr'
              snippet='Puppr, inspired by Flickr, is a photo sharing website centered around dogs. Users can upload and view photos, comment on photos, and create their own photo albums for dogs.'
              tech={['React', 'Redux', 'Express', 'JavaScript', 'HTML', 'CSS']}
              description='thorough rundown of project goes here? challenges.. etc.'
              githubURL='https://github.com/trnle/puppr'
              liveLink='https://pupproni.herokuapp.com/'
              images={[home]}
            />
          </div>
        </div>
        <div className='overview'>
          <img src={ggPlaysIcon} alt='' height='70' />
          <div className='title-snippet'>
            <h4>ggPlays</h4>
            <p>Video game reviews application.</p>
          </div>
          <div className='view-modal'>
            <ProjectModal
              icon={ggPlaysIcon}
              altText='ggPlays icon'
              title='ggPlays'
              snippet='ggPlays is a web application that allows users to view various video games, publish game reviews, and catalog games into game shelves that can be customized.'
              tech={['Sequelize', 'Express', 'JavaScript', 'HTML', 'CSS']}
              description='test test test'
              githubURL='https://github.com/Hieu-Ma/ggplays/'
              liveLink='https://ggplays.herokuapp.com/'
              images={[ggPlaysHome]}
            />
          </div>
          
        </div>
      </div>
    </div>
   
  )
}

export default Portfolio;