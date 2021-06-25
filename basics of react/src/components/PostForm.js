import React, { Component } from 'react'

import axios from 'axios'
 class PostForm extends Component {
 
      constructor(props) {
          super(props)
      
          this.state = {
               userId: ' ',
               title: '',
               body: '',
          }
      }
      changeHandler =(e) =>{
          this.setState({
              [e.target.name]: e.target.value
              // it does it for all three names userId,title, body
          })
      }

      submitHandler =  e =>{
          e.preventDefault();
          console.log(this.state);

          axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
               .then(res=>{
                   console.log(res);
               })
               .catch(e =>{
                   console.log(e);
               })
      }

    render() {
        const{userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                 
                  <div>
                      <input type="text" name="userId" value={userId} onChange={this.changeHandler} placeholder="UserId"/>
                  </div>

                  <div>
                      <input type="text" name="title" value={title} onChange={this.changeHandler} placeholder="title"/>
                  </div>

                  <div>
                      <input type="text" name="body"  value={body} onChange={this.changeHandler} placeholder="body"/>
                  </div>
                  <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
