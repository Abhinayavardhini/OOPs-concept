import React from 'react'

function Players(props) {
  console.log(`Creating Players Copy `);

  return (
    <div className='playerDiv'>
      <div>
      <h3>Name: {props.name}</h3>
      <h5>Age: {props.age}</h5>
      <h5>Specialization: {props.spl}</h5>
      <h5>Style: {props.style}</h5>
      </div>
    </div>
  )
}

export default Players
