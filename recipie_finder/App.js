import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App=()=>
{
  const APP_ID="281c5c2d";
  const APP_KEY="a0d78b9b1ee12160940f915c158eebb3";
  
  const [recipes,setRecipes]=useState([]);
  const[search,setSearch]=useState(" ");
  const[query,setQuery]=useState('chicken'); 
  
  
  

   // use [] as a second argument to stop making it run multiple times after that it runs and logs to the console only once
 
   useEffect(()=>{
    getRecipes();
  },[query]);

   const getRecipes= async () => {
     const response= await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
     const data= await response.json();
     setRecipes(data.hits);
     console.log(data.hits);
   }
   const updateSearch= e =>
   {
     setSearch(e.target.value);
     
   }

   const getSearch= e =>
   {
     e.preventDefault();
     setQuery(search);
     setSearch('');
   }

 
  return(
    <div className="App">
    <form onSubmit={getSearch} className="search-form">
    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
    <button  type="submit" className="search-button">Search</button>
    </form>
    {recipes.map(recipe => (
      <Recipe
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories} 
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
      />
    ))}    
    </div>
  );
};
export default App;
