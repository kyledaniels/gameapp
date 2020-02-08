import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import characterbg from "../components/images/characterbg.png";
import characterswg from "../components/images/characterswg.png";
import charactersab from "../components/images/charactersab.png";
import characterswb from "../components/images/characterswb.png";
import "./homestyle.css";
const keys = require('./config').clientID;
const url = 'https://github.com/login/oauth/authorize?client_id=' + keys;



const Home = () =>  (

    <Fragment>
        <Helmet><title>Be A Software Engineer!</title></Helmet>
    
    <div id="home"className="github-container">
        <section>
        <div>
           <span className="mdi mdi-cube-outline mdi-48px"></span>
    </div>
    <h1 className="header">Sign in or Sign Up with Github Account to play.</h1>
    <p>Sign into your github page to play the game to start the game or sign up <br></br>and pick your character to start the game...GOOD LUCK!</p>
    <div className ="play-button-container inner-container">
    {/* <p className="signin-text">Sign In</p> */}
            <div className="input-group">
              <label htmlFor="username" className="githubemail">Github Email</label><br></br>
              <input
                type="text"
                name="username"
                className="signin-input"
                placeholder="Username"/>
            </div>
            <div className="input-group">
              <label htmlFor="password" className="githubpassword">Password</label><br></br>
              <input
                type="password"
                name="password"
                className="password-input"
                placeholder="Password"/>
                <br></br>
                <button a href="https://github.com/login/oauth/authorize?client_id=f2effb81e7b98417a023" 
                className="signin-btn" type="submit">Sign In</button>
            </div>
    </div>
              <div className="outter-container">
          {/* <div className="header">
          <p className="register-text">Register account associated with Github</p>
          </div> */}
          <div className="Registration-box">
            <div className="input-group">
            <p htmlFor="github-email">Enter email associated with your Github</p>
            <label htmlFor="Email">Github Email</label><br></br>
            <input
                type="text"
                name="Email"
                className="email-input"
                placeholder="Github Email"/>
            </div>
            {/* <div className="input-group">
              <p className="register-username">Enter your character's name</p>
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                name="Character's Name"
                className="username-input"
                placeholder="Character's name"/>
            </div> */}
            <div className="input-group">
              {/* <p className="create-password">Github Password</p> */}
              <label htmlFor="Git-password">Github Password</label><br></br>
              <input
                type="password"
                name="register-password"
                className="register-password"
                placeholder="Github password"/>
                <br></br>
                {/* <button className="register-btn" id="c-img1" type="submit">Register</button>
                <button className="register-btn" id="c-img2" type="submit">Register</button>
                <button className="register-btn" id="c-img3" type="submit">Register</button>
                <button className="register-btn" id="c-img4" type="submit">Register</button> */}
            </div>
          </div>
          </div>
        <div id="start-game">
        <button className="sugnin-btn" type="submit" id="github">
                <a href = {url}>Sign in With Github</a>
                </button><a href="/play/quiz"><img src={characterbg} alt="character1" id="black-girl" className="character" /></a>
          <a href="/play/quiz"><img src={charactersab} alt="character3" id="asian-boy" className="character" /></a>
          <a href="/play/quiz"><img src={characterswg} alt="character2" id="white-girl" className="character" /></a>
          <a href="/play/quiz"><img src={characterswb} alt="character4" id="white-boy" className="character" /></a>
        </div>
        
    {/* <div className="auth-container">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div> */}
    </section>
    </div>
    </Fragment>
    
);

export default Home;