import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import axios from 'axios';
import Footer from './footer';
import Navbar from './Navbar';

function ShowPersonDetails(props) {
  const [person, setPerson] = useState({});
  // const [showToast, setShowToast] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/persons/${id}`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowPersonDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`/api/persons/${id}`)
      .then((res) => {

        // Show the success alert
        toast.success('info deleted!', {
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
          // setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 5000); // Adjust the timeout as needed
      })
      .catch((err) => {
        console.log('Error in CreatePerson!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Error while deleting the info, please try again!', {
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
    <div className='ShowPersonDetails'>
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
        theme="dark"
        transition={Slide}
      />

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h1 className='display-4 text-center'>Person's Record</h1>
            <p className='lead text-center'>View Person's Info</p>
            <hr /> <br />

            <div className='row justify-content-center'>
              <div className='col-md-12'>
                <table className='table table-striped table-bordered table-dark'>
                  <tbody>
                    <tr>
                      <th scope='row'>Name</th>
                      <td>{person.name}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Age</th>
                      <td>{person.age}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Height</th>
                      <td>{person.height}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Weight</th>
                      <td>{person.weight}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Phone no</th>
                      <td>{person.phnno}</td>
                    </tr>
                    <tr>
                      <th scope='row'>Date of joining</th>
                      <td>{person.date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='row justify-content-around mt-3'>
              <div className='col-md-4'>
                <button
                  type='button'
                  className='btn btn-outline-danger btn-lg btn-block'
                  onClick={() => {
                    onDeleteClick(person._id);
                  }}
                >
                  Delete Person
                </button>
              </div>
              <div className='col-md-4'>
                <Link
                  to={`/edit-person-info/${person._id}`}
                  className='btn btn-outline-info btn-lg btn-block'
                >
                  Edit Person
                </Link>
              </div>
              <div className='col-md-4'>
                <Link to='/person-list' className='btn btn-outline-warning btn-lg btn-block'>
                  Show Person List
                </Link>
              </div>
            </div>




          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShowPersonDetails;