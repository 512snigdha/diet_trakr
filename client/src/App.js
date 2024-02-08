//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreatePerson from './components/CreatePerson';
import ShowPersonList from './components/ShowPersonList';
import ShowPersondetails from './components/ShowPersondetails';
import UpdatePersoninfo from './components/UpdatePersoninfo';
import PersonCard from './components/PersonCard'; 



function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/' exact element={<PersonCard/>}/>
        <Route path='/Person-list' element={<ShowPersonList/>}/>
        <Route path='/add-person' element={<CreatePerson/>}/>
        <Route path='/edit-person-info' element={<UpdatePersoninfo/>}/>
        <Route path='/show-person/:id' element={<ShowPersondetails/>} />
        </Routes>
      </div>
      
      </Router>
  );
}

export default App;
