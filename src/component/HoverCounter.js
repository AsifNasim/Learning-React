import React, { Component } from 'react'
import  withCounter from './withCounter'
class HoverCounter extends Component {
   
    render() {
        // const {count} = this.state;
        const {count, increamentCount} = this.props
        return (
            <div>
            <h1 onMouseOver = {increamentCount}> {this.props.name} Hovered {count} times</h1>
            <button onMouseOver = {increamentCount} >Hovered {count} Times</button>
        </div>
        )
    }
}

export default withCounter(HoverCounter,3)
