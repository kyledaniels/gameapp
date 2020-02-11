import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import characterbg from "../components/images/characterbg.png";
import characterswg from "../components/images/characterswg.png";
import charactersab from "../components/images/charactersab.png";
import characterswb from "../components/images/characterswb.png";
import "./homestyle.css";
// const keys = require('./config').clientID;
// const url = 'https://github.com/login/oauth/authorize?client_id=' + keys;




const Home = () =>  (

    <Fragment>
        <Helmet><title>Be A Software Engineer!</title></Helmet>
    
    <div id="home"className="github-container">
        <section>
        <div>
           <span className="mdi mdi-cube-outline mdi-48px"></span>
        </div>
    <h1 className="header">Who Wants To Be A Software Engineer?!</h1>
    <h3 className="read">Read instructions below before starting the game</h3>
    <p className="instructions">You will be given a test of 15 questions of common web developer asked by a future employer in a job interview.
      <br></br>You will be timed 3 minutes during this test, you will also be assisted with a lifeline icon <i class="material-icons" id="light">lightbulb_outline</i><br></br>
      You will be given 2 hints for the entire test so make sure you use your brain power.
    </p>
    <h4 id="do-you">Do you have what it take to be a software engineer?</h4>
    <p className="instructions">Click on the "Sign in With Github" to sign in, then pick your character to start the game...GOOD LUCK!</p>
      <div className="outter-container">
          <div className="Registration-box">
              <button className="signin-btn" type="submit" id="github">
              <a href ='/auth/github/'>Sign in With Github</a>
              </button>
          </div>
        </div>
        <div id="start-game">
          <a href="/play/quizbg"><img src={characterbg} alt="character1" id="black-girl" className="character" /></a>
          <a href="/play/quizab"><img src={charactersab} alt="character3" id="asian-boy" className="character" /></a>
          <a href="/play/quizwg"><img src={characterswg} alt="character2" id="white-girl" className="character" /></a>
          <a href="/play/quizwb"><img src={characterswb} alt="character4" id="white-boy" className="character" /></a>
        </div>
    </section>
    </div>
    </Fragment>
    
);

export default Home;