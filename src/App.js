import React, { Component } from 'react';
import './App.css';

import quizData from './data.js';
import Question from './Question/Question';
import Options from './Options/Options';
import QuizNav from './Buttons/quizNavigation';

const quizOffStyle = {
  opacity: '.3',
  filter: 'blur(2px)',
  cursor: 'not-allowed'
}
const quizOnStyle = {
  opacity: '1',
  filter: 'blur(0px)',
  cursor: 'context-menu'
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: quizData[0].question,
      options: {
        A: '',
        B: '',
        C: '',
        D: ''
      },
      correct: '',
      quizStarted: false,
      timer: ''
    }
    this.onNavigation = this.onNavigation.bind(this);
    this.onQuizStart = this.onQuizStart.bind(this);
  }
  onNavigation(i) {
    console.log(i)
  }
  onQuizStart() {

    this.setState({ quizStarted: !this.state.quizStarted })
  }
  render() {
    return (
      <div className="App">
        <h3>React Quiz App</h3>
        <div className="quizBox" style = {this.state.quizStarted ? quizOnStyle : quizOffStyle}>
          <Question ques={this.state.currentQuestion} />
          <Options />
          <QuizNav next={this.onNavigation} buttonStatus = {this.state.quizStarted}/>

        </div>
        <button className="startbtn" onClick={this.onQuizStart}>Start Quiz</button>
      </div>
    );
  }
}

export default App;
