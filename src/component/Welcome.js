import { Component } from "react"
import React from 'react'

class Welcome extends Component{
    render(){
        return  (
            <div>
                <h1> Class Component of {this.props.name} a.k.a {this.props.heroName}</h1>
            </div>
        )
    }
}


export default Welcome