import React from 'react'

function FunctionClicks() {

   function clickEvent(){
        console.log('Button clicked')
    }
    return (
        <div>
            {/* EventHandler is a function and not a function call */}
            <button onClick = {clickEvent} >Click</button>
        </div>
    )
}

export default FunctionClicks
