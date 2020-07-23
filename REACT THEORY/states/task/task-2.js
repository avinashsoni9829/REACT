//add state to the function
// state should have property "isloggedin"
// render the word "in" if the user is logged in else render the word "out" if it is logged out
import React from "react"

class App extends React.Component{
    constructor()
    {
        super()
        this.state= {
            isLoggedin:true
        }
    }
    
    render()
    {
        let ans
        if(this.state.isLoggedin==true)
        ans="IN"
        else
        ans="OUT"
        
        return(
            <div>
            <h1>You are currently Logged {ans} </h1>
            </div>
        )
    }
}

export default App
