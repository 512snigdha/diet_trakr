import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const PersonCard = (props) => {
  const person = props.person



  return (
    <div className='card-container'>
      <img
        src='https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2017/05/1140-calorie-counting-app.imgcache.rev62ecd194605c05dfff72b7963164dd1d.jpg'
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