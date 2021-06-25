import React, { Component } from 'react'

 class LifecycleA extends Component {
// 1st method 
   constructor(props) {
       super(props)
   
       this.state = {
         name:'avinash'    

       }
       console.log('lifecycleA constructor ');
   }

// 2nd method 
   static getDerivedStateFromProps(props,state)
   {

        console.log('life  getDerivedStateFromProps');
        return null;
   }

   // 3rd method
    componentDidMount()
    {
        console.log('lifecycleA componentDidMount');
    }


    shouldComponentUpdate()
    {
         console.log('lifecycleA shouldComponentUpdate');

         return true;
    }
   

     getSnapshotBeforeUpdate(prevProps,prevState)
     {
         console.log('lifecycleA getSnapshotBeforeUpdate');

         return null;
     }
   
   
    componentDidUpdate()
    {
          console.log('lifecycleA componentDidUpdate');
    }
    // 4th method

    render() {
        console.log(' lifecycleA render');
       return(
        <div>
        
        <div>
         Lifecycle   
       </div>
       </div>


       )
       
         
       
       
    
}


}

export default LifecycleA
