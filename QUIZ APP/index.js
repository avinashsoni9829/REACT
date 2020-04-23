import React,{ Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
//root component

class QuizBee extends Component
{
    //state should be nearly located near the parent 
    // this lets us ti centrally store and use state data and make it easy for  debugging

    state = {
        questionBank: [], //to store the questions from the API
        score: 0,
        responses:0
    };
    
    // function to extract question
    getQuestions = () =>
    {
        quizService().then(question =>
            {
                this.setState({
                    questionBank:question
                });
            });
    };


    computeAnswer =(answer,correctAnswer) =>
    {
         if(answer === correctAnswer)
         {
             this.setState(
                 {
                     score: this.state.score + 1   //increment by 1

                 }
             );
             this.setState(
                 {
                     responses: this.state.responses < 5 ? this.state.responses + 1 : 5  //increment in all cases

                 }
             )

         }
    }

     //now we will use the componentDidMount feature to make the function getQuestions work for the project 

     componentDidMount()
     {
         this.getQuestions();   //function is invoked
     }

 
    //now in the render function we will check for the state using the ternary operator 

    render()
    {
        return(
            <div className="container">
           <div className="title">QuizBee</div> 

            {this.state.questionBank.length > 0 &&   this.state.responses < 5 &&
               
                this.state.questionBank.map(
                ({ question,answers,correct,questionId }) => (

                    <QuestionBox 
                    question={question}
                     options={answers}
                     key= {questionId}
                     selected={ answer => this.computeAnswer(answer,correct)}
                     />

                )
                )}  

          
            </div>

        );
    }
}

ReactDOM.render(<QuizBee />,document.getElementById("root"));
