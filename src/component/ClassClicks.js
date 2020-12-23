import React , {Component} from 'react'

class ClassClicks extends Component{
     clickEventClass() {
        console.log('class button has been clicked.')
    }

    render(){
        return(
            <div>
                <button onClick = {this.clickEventClass}>Click me class</button>
            </div>
        )
    }
}

export default ClassClicks