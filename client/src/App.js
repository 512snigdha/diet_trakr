//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreatePerson from './components/CreatePerson';
import ShowPersonList from './components/ShowPersonList';
import ShowPersondetails from './components/ShowPersondetails';
import UpdatePersoninfo from './components/UpdatePersoninfo';
import Home from './components/Homepage';
import AllRoutes from './components/Route';


function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/person-list' element={<ShowPersonList/>}/>
        <Route path='/add-person' element={<CreatePerson/>}/>
        <Route path='/edit-person-info/:id' element={<UpdatePersoninfo/>}/>
        <Route path='/show-person/:id' element={<ShowPersondetails/>} />
        <Route path='/routes' element={<AllRoutes />} />
        </Routes>
      </div>
      
      </Router>
  );
}

export default App;
