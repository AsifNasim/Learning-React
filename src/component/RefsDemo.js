import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                {/* we now have the ref of the input element */}
                <input type = "text" ref = {this.inputRef}/>
                <button onClick= {this.clickHandler}>Cick me</button>
            </div>
        )
    }
}

// this.inputRef contains all the documents elements
export default RefsDemo
