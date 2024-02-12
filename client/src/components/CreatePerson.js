import React, { usestate } from 'react';
import  { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';




const CreatePerson = () => {

    const onSubmit = (e) => {
        // Prevent the page from refreshing

        e.preventDefault()
        //Api calls with the help of axios

      //   axios.post("api/persons", person)
      //   .then((res) => {
      
      //   setPerson({
      //     Name: '',
      //     Age: '',
      //     Gender: '',
      //     Height: '',
      //     Weight: '',
      //     PhnNo: '' ,
      //     Date: ""
      //   })
      // })

        
    }
    return (
        <div className='CreatePerson'>
          <Navbar/>
            <div className='Container'>
            <div className="row">
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/Person-list' className='btn btn-outline-warning float-left'>
              Show Persons List
            </Link>
                </div>

                <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add person</h1>
            <p className='lead text-center'>Create new Person</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name Of the person'
                  name='title'
                  className='form-control'
                  // value={personalbar.name}
                  // onChange={onChange}
                />
              </div> 
              </form>
              </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default CreatePerson ;