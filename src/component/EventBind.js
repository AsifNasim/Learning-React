import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message : 'Hello Asif'
         }
        //  Binding in constructor
         this.clickHandler = this.clickHandler.bind(this)
     }

    //  binding in the function using arrow itself
     clickHandler = () => {
         this.setState({
             message:'you are awesome'
         })
     }
     
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* Binding in event handler using bind */}
                {/* <button onClick = {this.clickHandler.bind(this)} >Click me</button> */}
                {/* Binding in event Handler using arrow function */}
                {/* <button onClick = { () => this.clickHandler()} >Click me</button> */}
                <button onClick = {this.clickHandler} >Click me</button>
            </div>
        )
    }
}

export default EventBind
