import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Welcome to who wants to be a Software Engineer!</title></Helmet>
        <div className="instructions container">
            <h1>Instructions on Playing Game</h1>
            <p>Read Instructions On How to Win !!!!</p>
            {/* <h1>Welcome to who wants to be a Software Engineer!</h1> */}
            <p>To win this game you need to answer each of the following questions.</p>
            <p>You will need to answer each question before the the time expires.</p>
            <p>Are you ready to stimulate your mind with some web development??</p>
            {/* <ul className="browser-default" id="main-list">
            <ul className="browser-default" id="main-list">
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>              
            </ul> */}
            <div>
            <button className="back" type="submit"><span className="left"><Link to ="/">No Take Me Back</Link></span></button>
                <button className="go" type="submit"><span className="right"><Link to ="/play/quiz">Lets Play!</Link></span></button>
                {/* <span className="left"><Link to ="/">Return To Home Page</Link></span>
                <span className="right"><Link to ="/play/quiz">Lets Play!</Link></span> */}

            </div>
        </div>
    </Fragment>
   
);


export default QuizInstructions;

//line 1 Component,