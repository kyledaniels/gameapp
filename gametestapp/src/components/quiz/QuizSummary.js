import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class QuizSummary extends Component {
    constructor (props){
    super(props);
    this.state ={
        score:0,
        numberOfQuestions:0,
        numberOfAnsweredQuestions:0,
        correctAnswers:0,
        wrongAnswers:0,
        hintsUsed:0,
        fiftyFiftyUsed:0
    };

    }

    componentDidMount (){
        const {state} = this.props.location;
        if(state){
        console.log("Setting the values", state.numberOfQuestions)
        this.setState({
            numberOfQuestions:state.numberOfQuestions,
            correctAnswers:state.correctAnswers,
            score:(state.correctAnswers/state.numberOfQuestions) * 100,
            numberOfAnsweredQuestions:state.numberOfAnsweredQuestions,
            wrongAnswers:state.wrongAnswers,
            usedHints:state.hintsUsed,
            usedFiftyFifty:state.fiftyFiftyUsed,
        });
    }
}
   render(){

    const {state, score} = this.props.location;
    let stats, remark;
    let calculatedScore = (state.correctAnswers/state.numberOfQuestions) * 100
    console.log(calculatedScore)
    if (calculatedScore <= 30){
        remark = 'You need more practice!';
    } else if (calculatedScore >30 && score <= 50){
        remark ="Better luck next time";
    } else if (calculatedScore <= 70 && score > 50){
        remark = 'You can do better';
    } else if (calculatedScore >=71 && score <=84){
        remark = 'You did Great'
    } else {
        remark = 'Your an Software Engineer'
    }
    if (state !==undefined){
        stats = (
            <Fragment>
            <div>
                <span className = "mdi mdi-check-circle-outline success-icon"></span>
            </div>
            <h1>Game has ended</h1>
            <div className="container">
                <h4>{remark}</h4>
                <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                <span className="stat left">Total Number of Questions:</span>
                <span className="right">{this.state.wrongAnswers + this.state.correctAnswers}</span><br></br>
                       
                <span className="stat left">Number of Attempted Questions:</span>
                <span className="right">{this.state.numberOfAnsweredQuestions}</span><br></br>

                <span className="stat left">Number of Correct Answers:</span>
                <span className="right">{this.state.correctAnswers}</span><br></br>

                <span className="stat left">Number of Wrong Answers:</span>
                <span className="right">{this.state.wrongAnswers}</span><br></br>

                <span className="stat left">Hints Used:</span>
                <span className="right">{this.state.usedHints}</span><br></br>

                <span className="stat left">50/50 Used:</span>
                <span className="right">{this.state.usedFiftyFifty}</span>
            </div>
            <section>
                <ul>
                    <li>
                        <Link to ="/">Back To Home Page</Link>
                    </li>
                    <li>
                        <Link to ="/play/quiz">Play Again</Link>
                    </li>
                 </ul>
            </section>
            </Fragment>
        )

    } else{
        stats = ( 
        <section>
        <h1 className="no-stats">No Stats Available</h1>
       
        <ul>
        <li>
            <Link to ="/">Back To Home Page</Link>
        </li>
        <li>
            <Link to ="/play/quiz">Play Again</Link>
        </li>
     </ul>
     </section>
    
    
        );  
    }
     
       return(
           <Fragment>
               <Helmet><title>Game Summary</title></Helmet>
               {stats}
           </Fragment>
       );
   }

}


export default QuizSummary;