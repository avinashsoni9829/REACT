import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler()
    {
         console.log('click handler clicked !');
    }
    render() {
        return (
            <div>
            <button onClick={this.clickHandler}>ClsClick</button>   
            </div>
        )
    }
}

export default ClassClick;
