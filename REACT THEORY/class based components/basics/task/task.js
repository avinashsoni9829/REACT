/*
convert the following functions into class based components


*/

import React from "react"
import ReactDOM from "react-dom"


//#1
function App()
{
    return(
        <div>
        <header/>
        <greeting/>
        </div>
        
    )
}


//ans

class App extends React.Component
{
    render()
    {
        return(
            <div>
        <Header/>
        <Greeting/>
        </div>
            
            
        )
    }
}





//#2

function Header(props)
{
    return(
        <header>
        <p> welcome,{props.username} ! </p>
        </header>
        
    )
}




//ans 

class Header extends React.Component
{
    render()
    {
        return(
             <header>
        <p>welcome,{this.props.username}!</p>
        </header>
        )
       
    }
}


// class based me props ki jagah this.props aayega




//#3

class  Greeting extends React.Component()
{
    render(){
    const date=new Date();
    const hours=date.getHours();
    
    let timeOfDay
    if(hours<12)
    timeOfDay="morning"
    else if(hours>=12 && hours<17)
    {
        timeOfDay="afternoon"
    }
    else
    timeOfDay="night"
    
    return(
        <h1> Godd {timeOfDay} to you,sir or madam! </h1>
        
    )
    }    
    
}


 


