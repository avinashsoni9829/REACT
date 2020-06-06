import React from 'react';
import Joke from './Joke.js'


function App()
{
    return(
        
     <div>
     
     <Joke 
      jk={{
         imgUrl:"https://th.bing.com/th/id/OIP.4NPqwmrXqm3dq8ikIlml1wHaEK?pid=Api&rs=1 ",
         question:" laya? ",
         punch: " kya mast joke mara re!!  " 
      }}
        
      />
      
      <Joke 
      jk={{
         imgUrl:"https://indianmemetemplates.com/storage/arey-mujhe-chakkar-aane-laga-hai-1024x576.jpg ",
         question:" kyu? ",
         punch: " utha le re baba  " 
      }}
        
      />
      
      <Joke 
      jk={{
         imgUrl:" https://indianmemetemplates.com/storage/2019/01/50-rupya-kaat-overacting-ka.jpg",
         question:" 100 kate? ",
         punch: "  katt re baba kaat! " 
      }}
        
      />
      
      
      <Joke 
      jk={{
         imgUrl:"https://th.bing.com/th/id/OIP.lTfnXS9EKUGTvpT4485G4QHaEK?pid=Api&rs=1 ",
         question:" kyu karta h?  ",
         punch: " mela baap olcestra meh gana gaata tha!  " 
      }}
        
      />
      
      
      <Joke 
      jk={{
         imgUrl:" ",
         question:"  ",
         punch: "  " 
      }}
        
      />
      
      
      
      
     </div>   
        
    )
}

export default App;
