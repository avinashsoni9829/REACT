import React from "react";

const Result =({ score ,playAgain}) =>
(
    <div className="score-board">
    <div className="score">
    you score {score} /5 correct answers!
   <button className="playBtn" onClick={playAgain}>play Again!</button>

    </div>

    </div>

);


export default Result;
 
