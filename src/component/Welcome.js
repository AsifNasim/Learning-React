import { Component } from "react"
import React from 'react'

class Welcome extends Component{
    render(){
        // DESTRUCTURING OD CLASS COMPONENT
        const {name, heroName} = this.props
        // how to destructure state
        // const {state1, state2} = this.state
        return  (
            <div>
                <h1> Class Component of {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}


export default Welcome