import React,{Component} from "react"

class App extends Component{
    constructor()
    {
        super()
        this.state()={}
        
    }
    
     //componentDidMount only runs once while the component is showing on the screen
     // they are mostly used to do API calls when we need data from some external source
      // lifecycle method (1)
     componentDidMount()
     {
         
     }
     
     // lifecycle method (2)
     // recieve props from parent component 
     // this can be used to check whether the in-coming props are different from the original props 
     // removed from react now
   /*  componentWillReceiveProps(nextProps)
     {
         if(nextProps.property !== this.props.property)
         {
             // do something here !
         }
     }
    */  
    
    render()
    {
        return(
            <div> <h1>code goes here </h1> </div>
        )
    }
}
