import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* when you want to pass parameter into the props */}
            {/* we can pass here any number of parameter in greethandler */}
            <button onClick= {()=>props.greetHandler('Asif')} >Greet Parent</button>
            {/* <button onClick= {props.greetHandler} >Greet Parent</button> */}
        </div>
    )
}

export default ChildComponent