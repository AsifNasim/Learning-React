import React from 'react'


// DESTRUCTURING PROPS IN FUNCTIONAL COMPONENT
// Destructuring props using const
const Greet = props =>{
    const {name, heroName} = props;
    console.log(name,heroName);
    return (
    <div>
       <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
    
    )
}


// // Destructuring props  using arguments
// const Greet = ({name, heroName}) =>{
//     console.log(name,heroName);
//     return (
//     <div>
//        <h1>Hello {name} a.k.a {heroName}</h1>
//     </div>
    
//     )
// }



// replacing with ES6
// const Greet = (props) =>{
//     console.log(props)
//     return (
//     <div>
//        <h1>Hello Greeting {props.name} a.k.a {props.heroName}</h1>
//        {props.children}
//     </div>
    
//     )
// }

// function Greet(){
//     return <h1>Hello Awesome!</h1>
// }

export default Greet;

// we can also use name export like 
// export const Greet = () => <h1>Hello Awesome Asif!</h1>;
