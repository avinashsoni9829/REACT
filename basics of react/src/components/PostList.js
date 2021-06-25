import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    // for storage 
    constructor(props) {
        super(props)
    
        this.state = {

            posts: [],
            errorMessage:''
             
        }
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res =>{
                 console.log(res);
                 this.setState({
                     posts:res.data
                 })
             })
             .catch(e =>{
                 console.log(e);
                 this.setState({
                     errorMessage:'Error retrieving data'
                 })
             })
    }
    
    
    render() {
        const {posts,errorMessage} =this.state
        return (
            <div>
                list of posts

                {
                    posts.length?
                    posts.map(post =><div key={post.id}>{post.title}</div>):null
                }
                {
                    errorMessage? <div>{errorMessage}</div> : null
                }                
            </div>
        )
    }
}

export default PostList
