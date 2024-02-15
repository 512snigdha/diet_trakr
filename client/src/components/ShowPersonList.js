import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonCard from './PersonCard';
import Navbar from './Navbar';
import Footer from './footer';

function ShowPersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/persons`)
      .then((res) => {
        setPersons(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowPersonList ->');
        console.log(err)
      });
  }, []);

  // persons list find if their record is present or not , if present then map the person details
  const personList =
    persons.length === 0
      ? 'there is no person record!'
      : persons.map((person, k) => <PersonCard person={person} key={k} />);

  return (
    <div className='ShowPersonList'>
      <Navbar />

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Persons List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New data
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{personList}</div>
      </div>

      <Footer />
    </div>
  );
}

export default ShowPersonList;