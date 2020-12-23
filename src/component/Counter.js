import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    increament(){
        this.setState( (prevState, props) =>({
            count: prevState.count+1
        }))
    }

    // increament(){
    //     this.setState({
    //         count: this.state.count+1
    //     }, () =>{
    //         console.log('CallBack Value', this.state.count)
    //     })
    // }

    increamentFive(){
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>  
                <button onClick = {() => {this.increament()}}>Increament</button>
                <button onClick = {() => {this.increamentFive()}}>Increament</button>
            </div>
        )
    }
}

export default Counter
