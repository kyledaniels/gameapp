import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
// import QuizInstructions from './components/quiz/QuizInstructions';
// import Play from './components/quiz/Play';
import Playab from "./components/quiz/playab";
import Playbg from './components/quiz/playbg';
import Playwg from "./components/quiz/playwg";
import Playwb from "./components/quiz/playwb";
// import QuizSummary from './components/quiz/QuizSummary';
import QuizSummarybg from "./components/quiz/QuizSummarybg";
import QuizSummaryab from "./components/quiz/QuizSummaryab";
import QuizSummarywg from "./components/quiz/QuizSummarywg";
import QuizSummarywb from "./components/quiz/QuizSummarywb";
import "./Appstyle.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Home}></Route>
      {/* <Route path="/play/instructions" exact component={QuizInstructions}></Route> */}
      <Route path="/play/quizab" exact component={Playab}></Route>
      <Route path="/play/quizbg" exact component={Playbg}></Route>
      <Route path="/play/quizwg" exact component={Playwg}></Route>
      <Route path="/play/quizwb" exact component={Playwb}></Route>
      {/* <Route path="/play/quizsummary" exact component={QuizSummary}></Route> */}
      <Route path="/play/quizsummarybg" exact component={QuizSummarybg}></Route>
      <Route path="/play/quizsummaryab" exact component={QuizSummaryab}></Route>
      <Route path="/play/quizsummarywg" exact component={QuizSummarywg}></Route>
      <Route path="/play/quizsummarywb" exact component={QuizSummarywb}></Route>

    </Router>
  );
}

export default App;
