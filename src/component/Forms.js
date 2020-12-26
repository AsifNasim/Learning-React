import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username :'',
             textArea : '',
             option : 'react'
        }
    }

    handleUserNameChange = (event)=>{
        this.setState ({
            username: event.target.value
        })
    }

    handleComments = (event) =>{
        this.setState ({
            textArea: event.target.value
        })
    }

    handleOptions = (event) => {
        this.setState({
            option: event.target.value
        })
    }

    handleSubmit = (event) =>{
            alert(`${this.state.username} ${this.state.textArea} ${this.state.option}`)
            event.prevenDefault();
        
    }
    
    render() {
        // Destructuring Dates
        const {username, textArea, option} = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
                {/* User Label */}
                <div>
                <label>User Name</label>
                <input type ="text" value = {username} onChange = {this.handleUserNameChange}/>
                </div>

                {/* Text Area */}
                <div>
                    <label>Text Area</label>
                    <textarea value = {textArea} onChange = {this.handleComments}></textarea>
                </div>
                {/* Select options */}

                <div>
                <label>Select Options</label>
                <select value = {option} onChange = {this.handleOptions} >
                    <option value = 'react'>React</option>
                    <option value = 'angular'>Angular</option>
                    <option value = 'vue'>Vue</option>
                </select>
                </div>

                {/* Data Submission */}
                <button type='submit'> Submit </button>


            </form>
            
        )
    }
}

export default Forms
