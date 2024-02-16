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

  // personList finds if there any person details present or not, if present then map the person details using map()
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
              to='/add-person'
              className='btn btn-outline-info float-right'
            >
              + Add New Person
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{personList}</div>
      </div>
      <br />

      <Footer />
    </div>
  );
}

export default ShowPersonList;