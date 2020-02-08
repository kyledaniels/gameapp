import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import Playbg from './components/quiz/playbg';
import QuizSummary from './components/quiz/QuizSummary';
import "./Appstyle.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Home}></Route>
      <Route path="/play/instructions" exact component={QuizInstructions}></Route>
      {/* <Route path="/play/quiz" exact component={Play}></Route> */}
      <Route path="/play/quizbg" exact component={Playbg}></Route>
      {/* <Route path="/play/quiz" exact component={Play}></Route>
      <Route path="/play/quiz" exact component={Play}></Route> */}
      <Route path="/play/quizsummary" exact component={QuizSummary}></Route>


    </Router>
  );
}

export default App;
