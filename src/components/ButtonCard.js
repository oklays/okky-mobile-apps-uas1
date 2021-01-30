import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ButtonCard = () => {
  return (
    <TouchableOpacity style={{ backgroundColor: 'red', padding: 16, borderRadius: 10 }}>
      <Text>Hello</Text>
    </TouchableOpacity>
  )
}

export default ButtonCard

const styles = StyleSheet.create({})
