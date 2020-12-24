import React from 'react'
import Person from './Person'

function NameList() {
    const personList = [
        {
            id:1,
            name:'Tony',
            age:30,
            skill : 'React'
        },
        {
            id:2,
            name:'Steve',
            age:34,
            skill : 'Vue'
        },
        {
            id:3,
            name:'Bruce',
            age:30,
            skill : 'Angular'
        }
    ] 

    const persons = personList.map(person => <Person key='id' personProps = {person} />)
    // <h3>
    //     I am {person.name}. I am {person.age} and I know {person.skill} 
    // </h3> )

    return <div>{persons}</div>
    // const names = ['Tony','Steve', 'Strange']
    // const nameList = names.map(name => <h4>{name}</h4>)
    // return <div>{nameList} </div>
}

export default NameList
