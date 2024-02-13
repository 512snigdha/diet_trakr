import React, { useState } from 'react';
import  { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const CreatePerson = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    Name: '',
    Age: '',
    Gender: '',
    Height: '',
    Weight: '',
    PhnNo: '' ,
    Date: ""
  });
  const [showToast, setShowToast] = useState(false);

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

    const onSubmit = (e) => {
        // Prevent the page from refreshing

        e.preventDefault()
        //Api calls with the help of axios

        axios.post("api/persons", person)
        .then((res) => {
      
        setPerson({
          Name: '',
          Age: '',
          Gender: '',
          Height: '',
          Weight: '',
          PhnNo: '' ,
          Date: ""
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
        },  5000); // Adjust the timeout as needed

      })
      .catch((err) => {
        console.log('Error in CreatePerson!');
        console.log('The error is -> ')
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
          <Navbar/>
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
                  placeholder='Name'
                  name='Name'
                  className='form-control'
                  value={personalbar.name}
                  onChange={onChange}
                />
              </div> 
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Age'
                  name='Age'
                  className='form-control'
                  value={personalbar.name}
                  onChange={onChange}
                />
              </div> 
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Gender'
                  name=''
                  className='form-control'
                  value={personalbar.name}
                  onChange={onChange}
                />
              </div> 
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Height'
                  name='Height'
                  className='form-control'
                  value={personalbar.name}
                  onChange={onChange}
                />
              </div> 
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Weight'
                  name='weight'
                  className='form-control'
                  value={personalbar.name}
                  onChange={onChange}
                />
              </div> 
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Contact no.'
                    name='phone no'
                  className='form-control'
                  value={personalbar.name}
                  onChange={onChange}
                />
              </div> 
              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Date the person started dieting'
                  name='Date'
                  className='form-control'
                  value={personalbar.name}
                  onChange={onChange}
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