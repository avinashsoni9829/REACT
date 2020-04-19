import React,{ Component } from 'react'
//functional components cannot use lifecycle components so we need to covert the class component into functional components
import axios from 'axios'

class Home extends Component
{  // we use componentdidmount functionality for lifecycle components
      
    state ={
        posts: [ ]

    }
    componentDidMount()
    {
        //this task is asynchronous i,e it takes some time to implement and show the data to the user
        axios.get('https://jsonplaceholder.typicode.com/posts') //this return a promise that means that it will be completed at some point of time
        .then(res =>{
         console.log(res)
        this.setState({
            posts: res.data.slice(0,10)
        })    
        })
    }
    render()
    {
        const {posts}=this.state;

        const postList=posts.length ? (
            posts.map(post =>{
                return(
                    <div className="post card" key={posts.id}>
                    <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p>{post.body}</p>
                    </div>
                    </div>                
                    )
                })
         ) : (
            <div className="center">
            No posts Yet
            </div>
         )
    return(
        <div className="container">
        <h4 className="center">Home</h4>
        {postList}
        
        </div>
    )
}

}
export default Home
