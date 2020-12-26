import React, { Component } from 'react'
import LifecycleB from './LifecycyleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'asif'
        }

        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(state, props){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    
    componentDidMount(){
        console.log('LifecycleA componentDidMount ');
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }

    changeState= () =>{
        this.setState({
            name:'Asif Nasim'
        })
    }

    render() {
        console.log('LifecycleA render');
        return (
            <div>
                < LifecycleB />
                <button onClick= {this.changeState}>Click State</button>
              <h1>LifecycleA Parent</h1>  
              
            </div>
        )
    }
}

export default LifecycleA
