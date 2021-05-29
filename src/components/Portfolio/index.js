import ProjectModal from '../../context/ProjectModal';
import pupprIcon from '../../images/puppr/puppr-icon.png';
import pupprHome from '../../images/puppr/puppr-home.png';
import explore from '../../images/puppr/explore.png';
import createAlbum from '../../images/puppr/create-album.png';
import commentsSection from '../../images/puppr/comments-section.png';
import ggPlaysIcon from '../../images/ggPlays/ggPlays-icon.png';
import ggPlaysHome from '../../images/ggPlays/ggPlays-home.png';
import game from '../../images/ggPlays/game.png';
import reviews from '../../images/ggPlays/reviews.png';
import shelves from '../../images/ggPlays/shelves.png';
import tradeMarianIcon from '../../images/TradeMarian/trade-marian-icon.png';
import './Portfolio.css';

function Portfolio() {
  return (
    <div id='portfolio'>
      <h3>Portfolio</h3>
      <div id='portfolio-container'>
        {/* <div className='overview'>
          <img src={pupprIcon} alt='' height='70' />
          <div className='title-snippet'>
            <h4>Radiant</h4>
            <p>Skincare routine application.</p>
          </div>
          <div className='view-modal'>
            <ProjectModal
              icon={pupprIcon}
              altText='Radiant Icon'
              title='Radiant'
              snippet='ffkajl;wekjf;alkwejf;lkajdsf;lkajef'
              tech={['React', 'Redux', 'Flask', 'Python', 'JavaScript', 'HTML', 'CSS']}
              description='thorough rundown of project goes here? challenges.. etc.'
              githubURL='https://github.com/trnle/radiant'
              liveLink='https://radiantskin.herokuapp.com/'
              images={[]}
            />
          </div>
        </div> */}
       <div className='overview'>
          <img src={tradeMarianIcon} alt='' height='70' />
          <div className='title-snippet'>
            <h4>TradeMarian</h4>
            <p>Stock trading application.</p>
          </div>
          <div className='view-modal'>
            <ProjectModal
              icon={tradeMarianIcon}
              altText='TradeMarian Icon'
              title='TradeMarian'
              snippet='TradeMarian is a clone application of Robinhood, a stock trading platform where users can buy, sell, and watch stocks in the market.'
              tech={['React', 'Redux', 'Flask', 'Python', 'JavaScript', 'HTML', 'CSS']}
              description=''
              githubURL='https://github.com/jmthorn/TradeMarian'
              liveLink='https://trademarian.herokuapp.com'
              images={[]}
            />
          </div>
        </div>
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
              description=''
              githubURL='https://github.com/trnle/puppr'
              liveLink='https://pupproni.herokuapp.com/'
              images={[pupprHome, explore, createAlbum, commentsSection ]}
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
              description=''
              githubURL='https://github.com/Hieu-Ma/ggplays/'
              liveLink='https://ggplays.herokuapp.com/'
              images={[ggPlaysHome, game, reviews, shelves]}
            />
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Portfolio;