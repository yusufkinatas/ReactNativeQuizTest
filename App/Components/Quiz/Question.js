import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import Answer from './Answer'

const Question = ({ questionText, answers, showNextQuestion, showEnd }) => (
    <ScrollView  contentContainerStyle={styles.container}>
      <Text style={styles.question}>{questionText}</Text>
      {answers.map((answer, index) => (
        <Answer
          key={index}
          text={answer?.text}
          onPress={() => {
            if (answer.next) {
              showNextQuestion(answer.next)
            } else {
              showEnd(answer.end)
            }
          }}
        />
      ))}
    </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

export default Question
