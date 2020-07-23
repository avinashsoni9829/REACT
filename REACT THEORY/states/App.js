// for a  component to use state it should be a class based component
// whenver we use the constructor method in our class based component we must first give a  call to a global function known as  super ()
// after calling the super function we need to add this.state property to use the constructor as a 
// state

// state will always be a object 


import React from "react"

class App extends React.Component{
    
    constructor()
    {
        super()
        this.state={ 
            answer: "YES"
        }
    }
    render()
    {
        return(
            <div>
            <h1>is state important to know?  {this.state.answer} </h1>
            </div>
        )
    }
}



export default App
