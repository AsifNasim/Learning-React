import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin:true
        }
    }
    
    render() {
        // Using short circuit method
        return this.state.isLoggedin && <div>Hello Asif</div>
        //USING TERNARY OPERATOR
        // return this.state.isLoggedin ?
        //  (<div>Hello Asif</div>) :  (<div>Hello User</div>)

        // USING ELEMNT VARIABLE APPROACH
        // let message 
        // if(this.state.isLoggedin){
        //     message = <div>welcome Asif</div>
        // } else {
        //     message = <div>welcome User</div>
        // }

        // return <div>{message}</div>    
        
         // if else Approach
        // if(this.state.isLoggedin){
        //     return (
        //         <div>
        //             hello Asif
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             hello User
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
