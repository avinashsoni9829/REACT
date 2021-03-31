import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Avinash'
        }
    }

    componentDidMount()
    {
         setInterval(()=>{
             this.setState({
                 name:'Avinash'
             })
         },2000)
    }
    
    render() {
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
