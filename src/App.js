import Splash from './components/splash/Splash';
import Reps from './components/reps/reps'
import RepPage from './components/reps/RepPage/RepPage'
import GoogleCivicState from './context/civic/GoogleCivicState'

import AddressForm from './components/reps/AddressForm'

import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './index.scss';

function App() {
  return (
    <GoogleCivicState>
      <Router>
        <div className="App">
          <header className="App-header">
          <Splash />
            <Route path="/" exact component={Reps}/>
            <Route path="/rep/:repname" component={RepPage}/>
          </header>
        </div>
      </Router>
    </GoogleCivicState>
  );
}

export default App;
