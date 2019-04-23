import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../Button'

const Answer = ({ text, onPress }) => (
  <View style={styles.container}>
    <Button onPress={onPress} text={text} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
})

export default Answer
