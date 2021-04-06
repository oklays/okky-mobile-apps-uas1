import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import CustomHeader from '../components/CustomHeader'

const DetailScreen = ({ navigation, route }) => {
  const [uri, setUri] = useState('')
  const loadUrl = () => {
    const { url } = route.params
    setUri(url)
  }

  useEffect(() => {
    loadUrl()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <CustomHeader title="Detail" onPress={() => navigation.goBack()} />
      <WebView
        containerStyle={{ borderRadius: 10, width: '100%', height: '100%' }}
        style={{ borderRadius: 10 }}
        source={{
          uri: uri,
        }}
      />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})
