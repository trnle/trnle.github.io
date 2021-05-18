import ProjectTile from '../ProjectTile';
import pupprIcon from '../../images/puppr/puppr-icon.png';
import home from '../../images/puppr/home.png';
import explore from '../../images/puppr/explore.png';
import ggPlaysIcon from '../../images/ggPlays/ggPlays-icon.png';
import './Portfolio.css';

function Portfolio() {
  return (
    <div id='portfolio'>
      <h2>Portfolio</h2>
      <ProjectTile
        icon={pupprIcon}
        altText='Puppr Icon showing dog'
        title='Puppr'
        snippet='very brief description'
        tech='React Redux Express JavaScript HTML CSS'
        description='test test test'
        githubURL='https://github.com/trnle/puppr'
        liveLink='https://pupproni.herokuapp.com/'
        images={[home, explore]}
      />
      <ProjectTile
        icon={ggPlaysIcon}
        altText='ggPlays icon'
        title='ggPlays'
        snippet='very brief description'
        tech='Sequelize Express JavaScript HTML CSS'
        description='test test test'
        githubURL='https://github.com/Hieu-Ma/ggplays/'
        liveLink='https://ggplays.herokuapp.com/'
      />
    </div>
  )
}

export default Portfolio;