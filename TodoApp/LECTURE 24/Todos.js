import React from 'react'

const Todos=({todos,deleteTodo})=>
{
    //react needs a unique key to unqiuely identify the elements when we are using the map function
    const todoList=todos.length? (todos.map(todo =>{
        return(
        <div className="collection -item" key={todo.id}>
        <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
        )
    })): (
        <p> you have no todo's left ,yayl</p>
    )
    return(
         <div className="todos collection">
          {todoList}       
        </div>
    );
}

export default  Todos
