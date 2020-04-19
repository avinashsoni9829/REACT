//when we need states then it should be a class based component

import React,{Component} from 'react'

class AddTodo extends Component{
   state={
       content: ''
   }


   handleChange=(e)=>{
   this.setState({
       content:e.target.value
   })
   }

   handleSubmit=(e)=>
   {
       e.preventDefault();
     this.props.addTodo(this.state);
     this.setState({
         content:''
     })
   }
   // in the input the value is set to this.state.content  and in the state the content is set to blank so that 
   // whenever we add a todo the text field gets empty

    render()
    {
        return(

            <div>
            <form onSubmit={this.handleSubmit}>
            <label>Add new Todo:</label>
            
            <input type="text" onChange={this.handleChange} value={this.state.content} /> 
            </form>
            
            </div>
        )
    }
}

export default AddTodo
