import React , {Component} from 'react'
import ChildComponent from '../ChildComponent'

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parentName :'Nasim'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <div>
                {/* Here greet handler is a props */}
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }

}

export default ParentComponent