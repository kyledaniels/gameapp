import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';

import questions from '../../questions.json';
import isEmpty from '../../utils/is-empty';
import correctNotification from '../../assets/audio/crash.mp3';
import wrongNotification from '../../assets/audio/kick-bass.mp3';
import buttonSound from '../../assets/audio/snare.mp3';


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
                  numberOfQuestions: questions.length,
                  answer
              });
          }
      };

      handleOptionClick =(e) => {
         if (e.target.innerHTML.toLowerCase()=== this.state.answer.toLowerCase()){
             document.getElementById('correct-sound').play();
            this.correctAnswer();
            } 
            else {
             document.getElementById('wrong-sound').play();
                this.wrongAnswer()
            }
        
        
      }

      handleButtonClick = ()=> {
          this.playButtonSound();

      };

      playButtonSound = () =>{
          document.getElementById('button-sound').play();
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
        const { currentQuestion, currentQuestionIndex, numberOfQuestions } = this.state;
        return(
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <Fragment>
                    <audio id="correct-sound" src={correctNotification}></audio>
                    <audio id="wrong-sound" src={wrongNotification}></audio>
                    <audio id="button-sound" src={buttonSound}></audio>
                </Fragment>
                <div className="questions">
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
                            <span>{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                            <span className="mdi mdi-clock-outline mdi-24px">Clock will go here</span>
                        </p>
                    </div>

                    <h5>{currentQuestion.question}</h5>
                
                   <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                        <p  onClick={this.handleOptionClick}className="option">{currentQuestion.optionB}</p>
                  </div>

                  <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                  </div>
                  <div className="button-container">
                      <button onClick={this.handleButtonClick}>Previous</button>
                      <button onClick={this.handleButtonClick}>Next</button>
                      <button onClick={this.handleButtonClick}>QuitGame</button>
                  </div>
                </div>
            </Fragment>
           
        );
    }
}



export default Play;