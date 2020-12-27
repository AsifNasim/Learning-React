import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

// IF WE USE PURE COMPONENT THEN IT WILL SHALLOW COMPARE AND THEN RENDER IF THERE IS A DIFFENCE
// BUT IN THIS CASE WE ARE COMPARING PRIMITIVE AND THE DATA ARE SAME HENCE NO DIFFENECE
// AS WELL AS NO RE-RENDER. mOREOVER IF PARENT DOESN'T RE-RENDER THEN THE CHILD WILL ALSO NOT
// RE-RENDER
// export class ParentComp extends PureComponent {
export class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Asif Nasim'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Asif Nasim'
            })
        }, 2000);
    }
    
    render() {
        console.log('**********PARENT COMP RENDER**********')
        return (
            <div>
                Parent Component
                <MemoComp name = {this.state.name}/>
                {/* <RegComp name = {this.state.name} />
                <PureComp name = {this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
