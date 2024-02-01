//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreatePerson from './Components/AddPerson'
import ShowPersonList from './Components/ShowPersonList'
import ShowPersondetails from './Components/ShowPersondetails'
import UpdatePersonInfo from './Components/UpdatePersonInfo'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' elememnt={<ShowPersonList/>}/>
          <Route exact path='/add-person' elememnt={<CreatePerson/>}/>
          <Route exact path='/edit-personinfo' elememnt={<UpdatePersonInfo/>}/>
          <Route exact path='/show-person/:id' elememnt={<ShowPersondetails/>}/>
        </Routes>
      </div>
      
      </Router>
  );
}

export default App;
