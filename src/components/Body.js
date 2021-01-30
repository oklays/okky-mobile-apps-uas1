import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

const Body = (props) => {
  return <ScrollView style={{flex: 1}}>{props.children}</ScrollView>
}

export default Body

const styles = StyleSheet.create({})
