import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { theme } from '../core/theme'
import Gap from './Gap'

const BackButton = ({ goBack, title }) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={require('../assets/arrow_back.png')} />
    {title && (
      <>
        <Gap width={10} />
        <Text style={styles.header}>{title}</Text>
      </>
    )}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
  header: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
})

export default BackButton
