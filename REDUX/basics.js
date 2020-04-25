const {createStore} = Redux;
//a reducer is just a function that interacts 
// with the store

const initstate={
  todos: [],
  posts: []
}

function myreducer(state=initstate,action)
{
  
 if(action.type=='ADD_TODO')
   {
   return {
     todos: [...state.todos,action.todo]
     
   }
   }
  
}
const store=createStore(myreducer);
//reducer is passed in the store as a parameter
//action is a javascript object
const todoAction={type:'ADD_TODO',todo:'buy milk'};
//now we will despatch the action
//dispatch means that we will be sending the parameter to the reducer
store.dispatch(todoAction)
