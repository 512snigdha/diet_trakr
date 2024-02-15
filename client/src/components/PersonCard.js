import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const PersonCard = (props) => {
  const person = props.person



  return (
    <div className='card-container'>
      <img
        src='https://www.shutterstock.com/image-photo/close-woman-using-meal-tracker-260nw-2313671175.jpg'
        alt='Persons'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-person/${person._id}` }>
            {person.Name}  
          </Link> 
        </h2>
        <h3>{person.Age}</h3>
        <p>{person.Gender}</p>
      </div>
    </div>  
  )
}

export default PersonCard