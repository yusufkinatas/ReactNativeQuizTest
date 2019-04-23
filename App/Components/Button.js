import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const Button = ({ text, onPress, centered }) => (
  <TouchableOpacity
    style={{ ...styles.container, alignItems: centered ? 'center' : 'flex-start' }}
    onPress={onPress}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
})

export default Button
