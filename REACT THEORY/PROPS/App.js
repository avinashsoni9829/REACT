import React from 'react';
import ContactCard from './ContactCard.js'

function App()
{
    return(
        <div className="contacts">
        
        <ContactCard 
        contact=
        {{
          name :"mr soni", 
         imgUrl:"http://2.bp.blogspot.com/-DZsnSlKucpI/UmVDmpFjNTI/AAAAAAAAEEE/KmYBXsnaeLA/s1600/A.png",
          phone:" +91-9314632311", 
          email:"avinashsoni9829@gmail.com"
         }}
         
 
         /> 
         
          <ContactCard 
          contact={{
            name:"mr jain", 
          imgUrl:"https://images.idgesg.net/images/article/2017/07/emoji_update_2017_9-100729321-large.jpg ",
           phone:" +91-9829088740" ,
           email:"avinash9829@gmail.com" 
          }}
         />
         
          <ContactCard 
          contact={{ 
          name :"mr dixit" ,
         imgUrl:"https://th.bing.com/th/id/OIP.HbZSowgvPgqx2Hm7CBfV4QHaHa?pid=Api&rs=1 ",
          phone:" +91-9414048879" ,
          email:"avinashsoni829@gmail.com" 
         }}
       
         />
         
          <ContactCard 
          contact={{
          name :"mr bacchan", 
         imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emoji_u1f61b.svg/768px-Emoji_u1f61b.svg.png ",
          phone:" +91-9314632211" ,
          email:"avinashso9829@gmail.com"
          }}
        
         />
        
         
        
        </div>
    )
}

export default App;
