import React, { Component } from 'react'
import  withCounter from './withCounter'
class ClickCounter extends Component {
    
    render() {
        // Destructuring Props
        const {count, increamentCount} = this.props;
        return (
            <div>
                <h1>{this.props.name} Clicked = {count} times</h1>    
                <button onClick = {increamentCount} >Click {count} Times</button>
            </div>
        )
    }
}

// Exporting HOC-(Higher Order Components) here
export default withCounter(ClickCounter,6)
