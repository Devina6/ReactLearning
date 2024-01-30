import React from 'react'
import Person from './person'

function nameList() {
    const persons = [
        {
            id:1,
            name:'Devina',
            age:26
        },
        {
            id:2,
            name:'abc',
            age:11
        },
        {
            id:3,
            name:'xyz',
            age:99
        }
    ]
    const personList = persons.map(person => <Person key = {person.id} person = {person}/>) // key prop must be a unique value
    return <div>{personList}</div>
}

export default nameList