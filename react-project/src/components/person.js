import React from 'react'

function person({person}) {
  return (
    <div>
        <h2> 
        I am {person.name}, and I am {person.age} years old
        </h2>
    </div>
  )
}

export default person