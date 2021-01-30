import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import BackButton from './BackButton'
import { theme } from '../core/theme'
const width = Dimensions.get('window').width

const CustomHeader = ({ onPress, title }) => {
  return (
    <View style={{ paddingHorizontal: 40, paddingVertical: 40 }}>
      <BackButton goBack={onPress} title={title} />
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
})
