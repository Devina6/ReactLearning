import React from 'react'
import Person from './person'

function nameList() {
    const names = ['Devina','abc','xyz']
    const nameList = names.map((name,index) => <h2 key ={index}>{index} : {name}</h2>) // key prop must be a unique value, but index as key is still a problem
    return <div>{nameList}</div>
}

export default nameList