//a file with both class based and function based components 

import React from  "react"

function App()
{
    return(
        <div>
        <h1> your code goes here </h1>
        </div>
    )
}

class App extends React.Component{
    
    yourMethodHere()
    {
        
    }
    render()
    {
        const style =this.yourMethodHere();
        return(
            <div>
        <h1> {this.props.whatever} </h1>
        </div>
            
        ) 
    }    
    
}
