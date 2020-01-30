import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';
import questions from '../../questions.json';
import isEmpty from '../../utils/is-empty';
import "./playstyle.css";

class Play extends Component {
    constructor (props) {
        super(props);
        this.state ={
            questions,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions:0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers:0,
            hints:5,
            fiftyFifty:2,
            usedFiftyFifty:false,
            time:{}
        };      
    }

    componentDidMount () {
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions,currentQuestion,nextQuestion, previousQuestion);
    }

      displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
          let {currentQuestionIndex} = this.state; 
          if (!isEmpty(this.state.questions)) {
              questions = this.state.questions;
              currentQuestion = questions[currentQuestionIndex];
              nextQuestion = questions[currentQuestionIndex + 1];
              previousQuestion= questions[currentQuestionIndex-1];
              const answer = currentQuestion.answer;
              this.setState({
                  currentQuestion,
                  nextQuestion,
                  previousQuestion,
                  answer
              });
          }
      };

      handleOptionClick =(e) => {
         if (e.target.innerHTML.toLowerCase()=== this.state.answer.toLowerCase()){
            this.correctAnswer();
            } 
            else {
                this.wrongAnswer()
            }
        
        
      }

      correctAnswer = () =>{
          M.toast({
              html: 'Correct Answer!!!',
              classes: 'toast-valid',
              displayLength: 1500
          });
          this.setState(prevState =>({
              score: prevState.score + 1,
              correctAnswers: prevState.correctAnswers + 1,
              currentQuestionIndex: prevState.currentQuestionIndex + 1,
              numberOfAnsweredQuestions:prevState.numberOfAnsweredQuestions + 1
          }), ()=>{
              this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
          });
      }
         
      wrongAnswer = () =>{
        navigator.vibrate(1000)
        M.toast({
            html: 'Wrong Answer!!!',
            classes: 'toast-valid',
            displayLength: 1500
        });
        this.setState(prevState =>({
           wrongAnswers: prevState.wrongAnswers + 1,
           currentQuestionIndex: prevState.currentQuestionIndex + 1,
           numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), ()=> {
            this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
        });
    }
          
    render () {
        const { currentQuestion } = this.state;
        return(
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <div className="questions quiz-continer">
                    <div className="lifeline-container">
                        <p>
                    <span className=" mdi-set-center mdi-24px lifeline-icon">Life-Line</span>2
                        </p>
                        <p>
                    <span className=" mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">Light Bulb</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>1 of 15</span>
                            <span className="mdi mdi-clock-outline mdi-24px">Clock will go here [[possibly]]</span>
                        </p>
                    </div>

                    <h5 className="question-title">{currentQuestion.question}</h5>
                
                   <div className="options-container">
                        <button className="option-btn"><p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p></button><br></br>
                        <button className="option-btn"><p  onClick={this.handleOptionClick}className="option">{currentQuestion.optionB}</p></button>
                  </div>

                  <div className="options-container">
                        <button className="option-btn"><p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p></button><br></br>
                        <button className="option-btn"><p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p></button>
                  </div>
                  <div className="button-container">
                      {/* <button>Previous</button>
                      <button>Next</button> */}
                      <button className="quit" type="submit"><a href="/">Quit Game</a></button>
                  </div>
                </div>
            </Fragment>
           
        );
    }
}



export default Play;