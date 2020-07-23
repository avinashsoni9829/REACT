//set state can have two values in parenthesis
//everytime we create a class method to use the setstate function we need to bind that method to the class 

//so in this case we are using the handleclick method to change the state so we need to bind handClick to our class
// so to bind we use the folllowing commmand in our constructor:
// this.handleClick=this.handleClick.bind(this)
import React from "react";

class App extends React.Component 
{
    constructor()
    {
        super()
        this.state={
            count :0
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick()
    {
       this.setState((prevState) =>{
           return {
               count: prevState .count+1
           }
       })
    }
    render()
    {
        return(
            <div>
            <h1>{this.state.count} </h1>
             <button onClick={this.handleClick}>change me! </button>
            </div>
        )
    }
}
export default App
