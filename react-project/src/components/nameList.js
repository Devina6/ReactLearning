import React from 'react'

function nameList() {
    const names = ['Devina','abc','xyz']
  /*return (
    <div>
        {
            names.map(name => <h2>{name}</h2>)
        }
    </div>
  )*/
  const nameList = names.map(name => <h2>{name}</h2>)
  return <div>{nameList}</div>
}

export default nameList