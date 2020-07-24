import React from "react"


class App extends React.Component{
   constructor()
   {
       super()
       this.state={
           unreadMeassage: ["hi", "hello there !"
           ]
       }
   }
   
   
    render() 
    {
        return(
            <div>
            { 
                this.state.unreadMeassage.length>0 &&
                <h3>you have {this.state.unreadMeassage.length} unread messages </h3>
                
                }
            </div>
        )
    }
}
export default App
