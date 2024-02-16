import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Navbar from './Navbar';
import Footer from './footer';

const Home = (props) => {
    return (
      <div className='Home'>
        <NavBar />
        <div className='container'>
          <div className='row'>
             
          </div>
        </div>

        <Footer />
      </div>  
    )
  }
  
  export default Home