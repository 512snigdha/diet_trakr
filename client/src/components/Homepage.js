import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Navbar from './Navbar';
import Footer from './footer';

const Home = (props) => {
  return (
    <div className='Home'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='bg'></div>
          <div className='col-md-8 m-auto web-desc'>
            <h1 className='display-5 text-center heading'>DIET TRACKER</h1>
            <h6 className='lead text-center'>Welcome To Our Website...!</h6>
            <p className='lead text-center'>This can help the person for maintaining thir diet schedule</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home