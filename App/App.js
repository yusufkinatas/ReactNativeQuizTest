import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native'
import Quiz from './Components/Quiz'
import firebase from 'firebase'

export default class App extends Component {
  constructor(props) {
    super(props)

    if (firebase.apps.length == 0) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDKW_dOnGWish-7U7Xvy2V2oYruAD-dBs8',
        authDomain: 'hasan-quiz.firebaseapp.com',
        databaseURL: 'https://hasan-quiz.firebaseio.com',
        projectId: 'hasan-quiz',
        storageBucket: 'hasan-quiz.appspot.com',
        messagingSenderId: '916883570498',
      })
    }

    this.state = {
      isLoading: true,
      quizData: null,
    }
  }

  componentDidMount() {
    this.fetchQuiz()
  }

  fetchQuiz = () => {
    firebase
      .database()
      .ref(`/quizzes/q1`)
      .once('value', (snapshot) => {
        this.setState({ quizData: snapshot.val(), isLoading: false })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <ActivityIndicator size="large" />
            <Text style={styles.text}>Yükleniyor</Text>
          </View>
        ) : (
          <Quiz quizData={this.state.quizData} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
})
