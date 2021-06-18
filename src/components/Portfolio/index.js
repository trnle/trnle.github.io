import ProjectModal from '../Portfolio/ProjectModal';
import pupprIcon from '../../images/Puppr/puppr-icon.png';
import pupprHome from '../../images/Puppr/puppr-home.png';
import explore from '../../images/Puppr/explore.png';
import createAlbum from '../../images/Puppr/create-album.png';
import commentsSection from '../../images/Puppr/comments-section.png';
import ggPlaysIcon from '../../images/ggPlays/ggPlays-icon.png';
import ggPlaysHome from '../../images/ggPlays/ggPlays-home.png';
import game from '../../images/ggPlays/game.png';
import reviews from '../../images/ggPlays/reviews.png';
import shelves from '../../images/ggPlays/shelves.png';
import tradeMarianIcon from '../../images/TradeMarian/trade-marian-icon.png';
import tmSplash from '../../images/TradeMarian/tm-splash.png';
import tmLogin from '../../images/TradeMarian/tm-login.png';
import tmPortfolio from '../../images/TradeMarian/tm-portfolio.png';
import tmStock from '../../images/TradeMarian/tm-stock.png';
import tmSearch from '../../images/TradeMarian/tm-search.png';
import radiantIcon from '../../images/Radiant/radiant-icon.png';
import radSplash from '../../images/Radiant/radiant-splash.png';
import radFeatures from '../../images/Radiant/radiant-features.png';
import radProducts from '../../images/Radiant/radiant-products.png';
import radProduct from '../../images/Radiant/radiant-product.png';
import radRoutines from '../../images/Radiant/radiant-routines.png';
import radJournal from '../../images/Radiant/radiant-journal.png';
import radEntry from '../../images/Radiant/radiant-entry.png';

import './Portfolio.css';

function Portfolio() {
  return (
    <div id='portfolio'>
      <h3>Portfolio</h3>
      <div id='portfolio-container'>
        <div className='overview'>
          <img src={radiantIcon} alt='' height='70' />
          <div className='title-snippet'>
            <h4>Radiant</h4>
            <p>Skincare application.</p>
          </div>
          <div className='view-modal'>
            <ProjectModal
              icon={radiantIcon}
              altText='Radiant Icon'
              title='Radiant'
              snippet='Create a personalized routine for your skincare and beauty treatments. Users can keep track of their morning and nighttime skincare routines as well as create
                journal entries recording their skin progress.'
              tech={['Python', 'JavaScript', 'React', 'Redux', 'Flask', 'HTML', 'CSS', 'PostgreSQL', 'SQLAlchemy']}
              description=''
              githubURL='https://github.com/trnle/radiant'
              liveLink='https://radiantskin.herokuapp.com/'
              images={[radSplash, radFeatures, radProducts, radProduct, radRoutines, radJournal, radEntry]}
            />
          </div>
        </div>
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
              tech={['Python', 'JavaScript', 'React', 'Redux', 'Flask', 'HTML', 'CSS', 'PostgreSQL', 'SQLAlchemy']}
              description=''
              githubURL='https://github.com/jmthorn/TradeMarian'
              liveLink='https://trademarian.herokuapp.com'
              images={[tmSplash, tmLogin, tmPortfolio, tmStock, tmSearch]}
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
              tech={['JavaScript', 'Express', 'React', 'Redux', 'HTML', 'CSS', 'PostgreSQL', 'Sequelize']}
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
              tech={['JavaScript', 'Express', 'Sequelize', 'HTML', 'CSS', 'Pug']}
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