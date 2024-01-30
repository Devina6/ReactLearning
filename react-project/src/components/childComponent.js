import React from 'react'

function childComponent(props) {
  return (
    //access the method through props object, if want to pass parameter use the arrow functions
    <div>
        <button onClick={() => props.greetHandler('child')}>Greet Parent </button> 
    </div>
  )
}

export default childComponent