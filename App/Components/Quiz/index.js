import React, { Component } from 'react'
import { View } from 'react-native'
import Question from './Question'
import End from './End'
import Button from '../Button'

class Quiz extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'question', //question-end
      questionID: this.props.quizData.firstQuestion,
      endID: '',
    }
  }

  componentWillReceiveProps() {
    alert('willRecieveProps')
  }

  resetQuiz = () => {
    this.setState({ questionID: this.props.quizData.firstQuestion, status: 'question' })
  }

  convertAnswersToArray = (answersObject) => {
    let arr = []
    for (const key in answersObject) {
      arr.push(answersObject[key])
    }
    return arr
  }

  renderQuestion = () => {
    const { questionID } = this.state
    const question = this.props.quizData.questions[questionID]
    return (
      <Question
        questionText={question.text}
        answers={this.convertAnswersToArray(question.answers)}
        showNextQuestion={(questionID) => this.setState({ questionID })}
        showEnd={(endID) => this.setState({ status: 'end', endID })}
      />
    )
  }

  renderEnd = () => {
    const { endID } = this.state
    const end = this.props.quizData.endings[endID]
    return <End text={end.text} img={end.img} />
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        {this.state.status == 'question' ? this.renderQuestion() : this.renderEnd()}
        <Button centered text="Reset Quiz" onPress={this.resetQuiz} />
      </View>
    )
  }
}

export default Quiz
