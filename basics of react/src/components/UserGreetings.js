import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        if(this.state.isLoggedIn)
        {
             return (
                 <div>
                     welcome avinash
                 </div>
             )
        }
        else
        {
             return (
                 <div>
                     welcome ram
                 </div>
             )
        }
    }
}

export default UserGreetings
