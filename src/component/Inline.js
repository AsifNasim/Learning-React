import React from 'react'

function Inline() {

    const heading = {
        fontSize : '66px',
        color : 'orange'
    }
    return (
        <div>
            <h1 style = {heading}>Inline Styling</h1>
            <h1 className = 'error'>Error</h1>
             {/* It will not work here because styles.success is only for particular component */}
            {/* <h1 className = {styles.success}>Success</h1> */}
        </div>
    )
}

export default Inline
