import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello!'
        }

       
    }

    clickHandler=()=>
    {
        this.setState({
            message:'GoodBye'})
          
    }
    
    render() {
        return (
            <div>
             <div>
                   {this.state.message}
            </div> 
            <button onClick={this.clickHandler}>Click</button> 
            </div>
        )
    }
}


export default EventBinding