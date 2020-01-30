import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./homestyle.css";



const Home = () =>  (

    <Fragment>
        <Helmet><title>Quiz App-Home</title></Helmet>
    
    <div id="home"className="github-container">
        <section>
        <div>
           <span className="mdi mdi-cube-outline mdi-48px"></span>
    </div>
    <h1 className="header">Quiz App</h1>
    <div className ="play-button-container inner-container">
    <p className="signin-text">Sign In</p>
            <div className="input-group">
              <label htmlFor="username" className="githubusername">Username</label>
              <input
                type="text"
                name="username"
                className="signin-input"
                placeholder="Username"/>
            </div>
            <div className="input-group">
              <label htmlFor="password" className="githubpassword">Password</label>
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
            <label htmlFor="Email">Github Email</label>
            <input
                type="text"
                name="Email"
                className="email-input"
                placeholder="Github Email"/>
            </div>
            <div className="input-group">
              <p className="register-username">Enter your character's name</p>
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                name="Character's Name"
                className="username-input"
                placeholder="Character's name"/>
            </div>
            <div className="input-group">
              <p className="register-password">Create a password</p>
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                name="register-password"
                className="register-password"
                placeholder="Register password"/>
                <br></br>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>
            </div>
          </div>
          </div>
        <button className="start-btn" type="submit"><a href="/play/quiz">Start Game</a></button>
    <div className="auth-container">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div>
    </section>
    </div>
    </Fragment>
    
);

export default Home;