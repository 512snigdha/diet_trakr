import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const PersonCard = (props) => {
  const person = props.person



  return (
    <div className='card-container'>
      <img
        src='https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph'
        alt='Persons'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-person/${person._id}` }>
            {person.name}  
          </Link> 
        </h2>
        <h3>{person.age}</h3>
        <h4>{person.gender}</h4>
      
      </div>
    </div>  
  )
}

export default PersonCard