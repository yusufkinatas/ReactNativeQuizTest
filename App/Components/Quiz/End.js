import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'

const End = ({ text, img }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    {typeof img == 'string' && <Image source={{ uri: img }} style={styles.image} />}
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 50,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    height: Dimensions.get('screen').width * 0.8,
    width: Dimensions.get('screen').width * 0.8,
  },
})

export default End
