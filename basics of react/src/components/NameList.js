import React from 'react'
import Person from './Person'

function NameList() {
    const names=['ram','avinash','gopu']
    const persons=[
        {
            id:1,
            name:'avinash',
            age:22
        },
        {
            id:2,
            name:'ram',
            age:19
        },
        {
            id:3,
            name:'gopu',
            age:11
        }
    ]
    const namelist=names.map(name=><h3>{name}</h3>)
    const personList=persons.map(person=> (
        <Person key={person.id} person={person}/>
    ))
    return (
        <div>
            <div>{namelist}</div>
       <div>{personList}</div>
        </div>
       
    )
}

export default NameList
