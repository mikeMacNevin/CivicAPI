import Splash from './components/splash/Splash';
import Reps from './components/reps/reps'

import GoogleCivicState from './context/civic/GoogleCivicState'

import AddressForm from './components/reps/AddressForm'
function App() {
  return (
    <GoogleCivicState>
    <div className="App">
      <header className="App-header">
        
        <Splash />
        <Reps />
      </header>
    </div>
    </GoogleCivicState>
  );
}

export default App;
