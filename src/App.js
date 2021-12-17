import Splash from './components/splash/Splash';
import Reps from './components/reps/reps'
import RepPage from './components/reps/RepPage/RepPage'
import GoogleCivicState from './context/civic/GoogleCivicState'

import Documents from './components/documents/Documents';
import { Route, Routes } from 'react-router-dom'

import './index.scss';

function App() {
  return (
    <GoogleCivicState>
      <Routes>
            <Route path="/" element={<Splash />}/>
            <Route path="reps" element= { <Reps />}>
              <Route path=":repname"element={<RepPage/>}/>
            </Route>
            <Route path="documents" element={ <Documents />} >
              <Route path=":doc" />
            </Route>
            {/* <Route path="/documents" element={Documents}/> */}
      </Routes>
    </GoogleCivicState>
  );
}

export default App;
