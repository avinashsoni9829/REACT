import  React from "react"

class App extends React.Component{
    constructor()
    {
        super()
        this.state ={
            status: false
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick()
    {
      this.setState(prevState => {
          return{
              status: !prevState.status
          }
      })
        
    }
    
    
    render()
    {
        let butttonText= this.state.status ? "Log-out":"log-in"
        let displayText= this.state.status ? "you can go now!" : "welcome !log in to access new features!"
        return(
            <div>
            <h1>{displayText}</h1>
            <button onClick={this.handleClick}>{butttonText} </button>
            
            </div>
            
        )
    }
}
export default App
