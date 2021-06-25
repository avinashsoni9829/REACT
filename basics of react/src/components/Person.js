import React from 'react'

function Person({person}) {
    return (
        <div>
            <div>hi i am {person.name} and my age is {person.age}</div>
        </div>
    )
}

export default Person
