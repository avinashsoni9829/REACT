import React,{Component} from 'react'

class Message extends Component{

     constructor()
     {
          super()
          
          this.state={
               text:"Welcome bouy !"
          }
         
     }

     changeMessage(){
         if(this.state.text === "Welcome bouy !")
         {
         this.setState({
             text:"thanks for subs!"
         })
        }
        else
        {
            this.setState({
                text:"karde yaar subscribe !"
            })

        }
     }
       
   
      render()
      {
            return(
                      <div>

                        <h1>{this.state.text}</h1>

                        <button onClick={()=>this.changeMessage()}> Click</button>
                      </div>
            )
      }

}


export default Message;
