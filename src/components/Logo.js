import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = (props) => {
  const { size } = props
  return (
    <Image
      source={require('../assets/twitch.png')}
      style={styles.image(size)}
    />
  )
}

const styles = StyleSheet.create({
  image: (size) => ({
    width: size ? size : 110,
    height: size ? size : 110,
    marginBottom: 8,
  }),
})

export default Logo
