import React, { Component } from 'react'

class RefsDemoOld extends Component {
    constructor(props) {
        super(props)
        this.cbRef = null;
        this.setCbRef = element =>{
            this.cbRef = element;
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler = () =>{
        alert(this.cbRef.value);
    }
    
    render() {
        return (
            <div>
                {/* we now have the ref of the input element */}
                <input type = "text" ref = {this.setCbRef}/>
                <button onClick= {this.clickHandler}>Cick me</button>
            </div>
        )
    }
}

// this.inputRef contains all the documents elements
export default RefsDemoOld
