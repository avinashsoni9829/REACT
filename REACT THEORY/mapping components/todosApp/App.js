import React from "react"
import TodoItem from "./TodoItem.js"
import todosData from "./todosData"

function MyApp()
{
    const todoItems =todosData.map( item => <TodoItem key={item.id} item={item} />)
    return(
      <div className="todo-list">
         {todoItems}
        
        
      </div>
    )
    
}


export default MyApp;
