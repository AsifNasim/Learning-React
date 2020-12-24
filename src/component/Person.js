import React from 'react'

function Person({personProps}) {
    return (
        <div>   
            <h3>
                I am {personProps.name}. I am {personProps.age} and I know {personProps.skill} 
            </h3> 

        </div>
    )
}

export default Person
