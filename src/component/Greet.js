import React from 'react'

// replacing with ES6
const Greet = (props) =>{
    console.log(props)
    return (
    <div>
       <h1>Hello Greeting {props.name} a.k.a {props.heroName}</h1>
       {props.children}
    </div>
    
    )
}

// function Greet(){
//     return <h1>Hello Awesome!</h1>
// }

export default Greet;

// we can also use name export like 
// export const Greet = () => <h1>Hello Awesome Asif!</h1>;
