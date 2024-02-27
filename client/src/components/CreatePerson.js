import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';





const CreatePerson = (props) => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    phnno: '',
    date: '',
  });
  const [showToast, setShowToast] = useState(false);


  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // Prevent the page from refreshing

    e.preventDefault()
    //Api calls with the help of axios

    axios.post('api/persons', person)
      .then((res) => {

        setPerson({
          name: '',
          age: '',
          gender: '',
          height: '',
          weight: '',
          phnno: '',
          date: '',
        })
        toast.success('persons info added successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 5000); // Adjust the timeout as needed

      })
      .catch((err) => {
        console.log('Error in CreatePerson!');
        console.log('The error is ->')
        console.log(err)
        // Show the success alert
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
  };




  return (
    <div className='CreatePerson'>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className='Container'>
        <div className="row">
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/person-list' className='btn btn-outline-warning float-left'>
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
                  placeholder='name'
                  name='name'
                  className='form-control'
                  value={person.name}
                  onChange={onChange}
                />
              </div> <br/>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='age'
                  name='age'
                  className='form-control'
                  value={person.age}
                  onChange={onChange}
                />
              </div><br/>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='gender'
                  name='gender'
                  className='form-control'
                  value={person.gender}
                  onChange={onChange}
                />
              </div><br/>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='height'
                  name='height'
                  className='form-control'
                  value={person.height}
                  onChange={onChange}
                />
              </div><br/>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='weight'
                  name='weight'
                  className='form-control'
                  value={person.weight}
                  onChange={onChange}
                />
              </div><br/>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Contact no.'
                  name='phnno'
                  className='form-control'
                  value={person.phnno}
                  onChange={onChange}
                />
              </div><br/>
              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Date the person started dieting'
                  name='date'
                  className='form-control'
                  value={person.date}
                  onChange={onChange}
                />
              </div><input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
             </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreatePerson;