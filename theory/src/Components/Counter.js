import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    mulIncrement()
    {
          this.setState( prevState => ({
              count:prevState.count + 1
          }))
    }


    increment()
    {
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log("callback value :",this.state.count);
        })
        console.log(this.state.count);
    }

    fmultiple()
    {
       this.mulIncrement();
       this.mulIncrement();
       this.mulIncrement();
       this.mulIncrement();
       this.mulIncrement();
       

    }

    decrement()
    {
         this.setState({
             count : this.state.count -1
         })
    }
    
    render() {
        return (
            <div>
            <div> count -{this.state.count} </div>
            <button onClick={() => this.fmultiple()}>Increase</button>
                
            <button onClick= {() => this.decrement()}>Decrease</button>
                
            </div>
        )
    }
}

export default Counter;
