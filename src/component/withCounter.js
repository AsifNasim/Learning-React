import React, {Component} from 'react'

const withCounter = (WrappedComponent, numMultiple) =>{
    class WithCounter extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
    
        increamentCount = () =>{
            this.setState(prevState =>{
               return {count: prevState.count+numMultiple}
            })
        }
        render(){
            return <WrappedComponent count = {this.state.count} increamentCount = {this.increamentCount}
            {...this.props}
            />
        }
    }
    return WithCounter
}

export default withCounter