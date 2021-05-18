import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Navigation />
      <Portfolio />
    </Router>
  );
}

export default App;
