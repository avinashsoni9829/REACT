import React from "react"
import Conditional from "./Conditional.js"




class App extends React.Component{
   constructor(){
       super()
       this.state= { 
       isLoading:true
       }
   }
   
   componentDidMount()
   {
       setTimeout( () => {
           this.setState({
               isLoading:false
           })
       },1500)
   }
 
 
    render()
    {
        return(
            <div>
            {this.state.isLoading ? <h1>loading..</h1> : <h1>welcome </h1>}
            <Conditional />
            </div>
        )
    }
}
export default App
