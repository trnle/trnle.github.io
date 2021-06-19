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
                journal entries to record their skin progress.'
              tech={['Python', 'JavaScript', 'React', 'Redux', 'Flask', 'HTML', 'CSS', 'PostgreSQL', 'SQLAlchemy', 'SweetAlert2', 'react-tabs']}
              description="The concept of a skincare routine application had been on my mind for a while but I'd yet developed 
              the necessary skills to completely build it out. Using all the knowledge I learned over the last few months
              to finally build this project was a rewarding experiencing! There are a plethora of skincare routines on the Internet,
              but I wanted to create a skincare application where users don't have to feel overwhelmed
              with a wide range of steps to follow. In my opinion, skincare should be made simple and that's what I wanted this application to feel like.
              Clean, minimal, and easy to use."
              // challenges="One of the challenges I faced during this project was creating a journal entry when the user completed a routine.
              // With two routines available to complete, an AM and/or PM routine, the entry should either be created or updated depending on whether the
              // user submitted a routine for that day."
              goals={['Skincare insights and information threads for users to interact', 'Keep track of products that can only be used a certain number of times in a week, month, etc.', 'Notifications for conflicting ingredients users check off within the same routine']}
              githubURL='https://github.com/trnle/radiant'
              liveLink='https://radiantskin.herokuapp.com/'
              images={[radSplash, radFeatures, radProducts, radProduct, radRoutines, radJournal, radEntry]}
            />
          </div>
        </div>
        <div className='overview'>
          <img src={tradeMarianIcon} alt='TradeMarian logo with purple feather' height='70' />
          <div className='title-snippet'>
            <h4>TradeMarian</h4>
            <p>Stock trading application.</p>
          </div>
          <div className='view-modal'>
            <ProjectModal
              icon={tradeMarianIcon}
              altText='TradeMarian Icon'
              title='TradeMarian'
              snippet='TradeMarian is a clone application of Robinhood, a stock trading and investing platform where users can buy, sell, and watch stocks in the market. The TradeMarian name is based on Maid Marian, the heroine of Robin Hood.'
              tech={['Python', 'JavaScript', 'React', 'Redux', 'Flask', 'HTML', 'CSS', 'PostgreSQL', 'SQLAlchemy', 'IEX Cloud API', 'News API', 'Recharts']}
              description="Utilizing the IEX Cloud API and News API was a fun learning experience since I hadn't used a third party API for my projects yet.
              Being able to retrieve all of the financial data we needed made it much easier than having to seed data into our database.
              I really enjoyed creating the stock performance graphs in which you can toggle around and view the different prices depending on the day. The graphs
              also alter between colors pink and green based on the performance of the stock over time."
              challenges="A challenge I faced was that I'd just learned the backend languages and frameworks we used for this application. There
              were times where I was unsure of how to query for data on the backend since Flask/SQLAlchemy were
              still new to me. Referencing the documentation and asking my teammates helped me immensely in these instances."
              goals={['Daily list of movers for top stocks']}
              githubURL='https://github.com/jmthorn/TradeMarian'
              liveLink='https://trademarian.herokuapp.com'
              images={[tmSplash, tmLogin, tmPortfolio, tmStock, tmSearch]}
            />
          </div>
        </div>
        <div className='overview'>
          <img src={pupprIcon} alt='Puppr logo of dog' height='70' />
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
              tech={['JavaScript', 'Express', 'Node', 'React', 'Redux', 'HTML', 'CSS', 'PostgreSQL', 'Sequelize']}
              description="Combining my love for dogs and photography, I created this Flickr inspired application for users to come together and share their awesome dogs."
              challenges="I wanted to create a clean design for the Explore page. On Flickr’s website, they have a photo grid 
              displaying images from various users. I found that when styling using grid or flexbox, some photos 
              would have extra whitespace depending on the size of the image. I researched guides and suggestions on how to 
              create a seamless grid view of images. There were a lot of resources online and I gathered a few ideas that I could try implementing.
              After trial and error of writing several different CSS declarations, I was finally able to create a 
              photo grid using columns set to a certain width. It took some time but using my resources helped me achieve my visual goal for this project."
              goals={['Load more images button on Explore and Profile pages', 'Carousel on photo page showing photographers other photos in corresponding album', 'Photo tags', 'Search for users or photo titles', 'Favorites', 'Followers']}
              githubURL='https://github.com/trnle/puppr'
              liveLink='https://pupproni.herokuapp.com/'
              images={[pupprHome, explore, createAlbum, commentsSection]}
            />
          </div>
        </div>
        <div className='overview'>
          <img src={ggPlaysIcon} alt="ggPlays two g's logo" height='70' />
          <div className='title-snippet'>
            <h4>ggPlays</h4>
            <p>Game reviews application.</p>
          </div>
          <div className='view-modal'>
            <ProjectModal
              icon={ggPlaysIcon}
              altText='ggPlays icon'
              title='ggPlays'
              snippet='ggPlays is a web application that allows users to view various video games, publish game reviews, and catalog games into game shelves that can be customized.'
              tech={['JavaScript', 'Express', 'PostgreSQL', 'Node', 'Sequelize', 'HTML', 'CSS', 'Pug']}
              description="As my first project, I learned a great deal from ggPlays. The concept and functionality was
              based on Goodreads, however, we designed the website from scratch. I learned about UI/UX, how to style with CSS,
              and how to rerender information on a page without a page refresh."
              challenges=""
              goals={['Reputation score for reviewers', 'Search games feature', 'Delete game(s) from a gameshelf']}
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