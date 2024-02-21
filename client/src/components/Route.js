import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

const AllRoutes = () =>(
    <div className='AllRoutes'>
        <Navbar />
        <div className='container'>
            <h3 className='display-4'>Backend Routes</h3>
            <ul>
                <li>Create: api/person/ </li>
                <li>Read: api/persons/ </li>
                <li>FindById: api/person/:id</li>
                <li>Update: api/person/:id</li>
                <li>Delete: api/person/:id</li>
            </ul>
        </div>
        <div className='container'>
            <h3 className='display-4'>Frontend Routes</h3>
            <ul>
                <li>Create: /add-person </li>
                <li>Read: /person-list </li>
                <li>FindById: /show-person/:id</li>
                <li>Update: /edit-person-info/:id</li>
            </ul>
        </div>
        <Footer />
    </div>
)

export default AllRoutes