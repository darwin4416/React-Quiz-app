import React, { Component } from 'react';
import './App.css';

import quizData from './data.js';
import Question from './Question/Question';
import Options from './Options/Options';
import QuizNav from './Buttons/quizNavigation';
import Timer from './Clock/timer';

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
      qsNo: 0,
      currentQuestion: quizData[0].question,
      options: {
        A: quizData[0].options.A,
        B: quizData[0].options.B,
        C: quizData[0].options.C,
        D: quizData[0].options.D
      },
      correct:quizData[0].correct,
      isCorrect:'',
      quizStarted: false,
      
      timer: ''
    }
    this.onNavigation = this.onNavigation.bind(this);
    this.onQuizStart = this.onQuizStart.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }
  onNavigation(state) {
    console.log(state)
    if (state === 1 && this.state.qsNo < quizData.length - 1) {
      this.setState({
        qsNo: (this.state.qsNo) + 1,
        isCorrect:"green"

      }, () => {
        console.log(this.state.qsNo)
        this.setState({
          currentQuestion: quizData[this.state.qsNo].question,
          options: quizData[this.state.qsNo].options,
          correct: quizData[this.state.qsNo].correct,
        })
      }
      )
    }
    else if (state === 0 && this.state.qsNo > 0) {
      this.setState({
        qsNo: (this.state.qsNo) - 1
       
      }, () => {
        console.log(this.state.qsNo)
        this.setState({
           currentQuestion: quizData[this.state.qsNo].question,
           options: quizData[this.state.qsNo].options,
           correct: quizData[this.state.qsNo].correct,
        })
      }
      )
    }
    else {
      return 0;
    }
  }
  onQuizStart() {

    this.setState({ quizStarted: !this.state.quizStarted })
  }
  handleAnswer(ans){
    if(ans ===this.state.correct){
     this.setState({
      isCorrect:"green"
     })

    }
    else{
      this.setState({
        isCorrect:"red"
       })
    }
  }
  render() {
    return (
      <div className="App">
        {/* <Timer/> */}
        <h3>React Quiz App</h3>
        <div className="quizBox" style={this.state.quizStarted ? quizOnStyle : quizOffStyle}>
          <Question ques={this.state.currentQuestion} />
          <Options 
             options={this.state.options} 
             attemptValue = {this.handleAnswer}
             status ={this.state.isCorrect}
           />
          <QuizNav next={this.onNavigation} buttonStatus={this.state.quizStarted} />

        </div>
        <button className="startbtn" onClick={this.onQuizStart}>Start Quiz</button>
      </div>
    );
  }
}

export default App;
