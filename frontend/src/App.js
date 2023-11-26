import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Views from './Views';
import Navbar from './pages/shared/Navbar';
 

const App = () => {

  return(
    <Router>
      <div className='dashboard-container row'>
          <Navbar />
          <Views />
      </div>
    </Router>
  )
}

export default App;