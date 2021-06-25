import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: ' ',
             comment: ' ',
             topic: "react"
        }
    }

    changeUsernameHandler = (event) => {
      this.setState({ 
          username: event.target.value
    })
    }

    changeCommentHandler=(event) => {
        this.setState({
            comment: event.target.value
        })

    }


    ChangeTopicHandler=(event) => {
        this.setState({
            topic: event.target.value
        })
    }


    handleSubmit =(event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefault();
    }
    
    render() {
        const {username, comment, topic} =this.state;
        return (
            <form onSubmit={ (e) => this.handleSubmit(e)}>
                 <div>
              <label>Username : </label>
              <input type="text" value={username} onChange={(e)=>this.changeUsernameHandler(e)} />
                </div>

                <div>
                  <label>Comments :</label>
                  <textarea value={comment} onChange={(e)=>this.changeCommentHandler(e)} />

                </div>


                 <div>

                     <label> Topics</label>

                     <select value={topic} onChange={(e)=>this.ChangeTopicHandler(e)}>
                         <option value="react">React</option>

                         <option value="angular">angular</option>

                         <option value="vue">vue</option>
                     </select>
                 </div>


                 <button type="submit">submit</button>

            </form>
           
        )
    }
}

export default Form
