import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import questions from '../../questions.json';
import isEmpty from '../../utils/is-empty';

class Play extends Component {
    constructor (props) {
        super(props);
        this.state ={
            questions,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion: {},
            answer: '',
            numberofQuestions: 0,
            numberofAnsweredQuestions:0,
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
         
          
    render () {
        const { currentQuestion } = this.state;
        return(
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
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
                            <span>1 of 15</span>
                            <span className="mdi mdi-clock-outline mdi-24px">Clock will go here</span>
                        </p>
                    </div>

                    <h5>{currentQuestion.question}</h5>
                
                   <div className="options-container">
                        <p className="option">{currentQuestion.optionA}</p>
                        <p className="option">{currentQuestion.optionB}</p>
                  </div>

                  <div className="options-container">
                        <p className="option">{currentQuestion.optionC}</p>
                        <p className="option">{currentQuestion.optionD}</p>
                  </div>
                  <div className="button-container">
                      <button>Previous</button>
                      <button>Next</button>
                      <button>QuitGame</button>
                  </div>
                </div>
            </Fragment>
           
        );
    }
}



export default Play;