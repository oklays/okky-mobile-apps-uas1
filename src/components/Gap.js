import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Gap = (props) => {
  const { width, height } = props
  return (
    <View style={{ width: width ? width : 0, height: height ? height : 0 }} />
  )
}

export default Gap

const styles = StyleSheet.create({})
