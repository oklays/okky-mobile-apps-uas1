import React, { useState, useEffect } from 'react'
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import Router from './src/router'
import * as Font from 'expo-font'

const customFonts = {
  primary: {
    300: './src/HotelApps/utils/fonts/Nunito-Light.ttf',
    400: './src/HotelApps/utils/fonts/Nunito-Regular.ttf',
    600: './src/HotelApps/utils/fonts/Nunito-SemiBold.ttf',
    700: './src/HotelApps/utils/fonts/Nunito-Bold.ttf',
    normal: './src/HotelApps/utils/fonts/Nunito-Regular.ttf'
  },
}

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(true)
  
  // const _loadFontsAsync = async () => {
  //   await Font.loadAsync(customFonts)
  //   setFontsLoaded(true)
  // }

  // useEffect(() => {
  //   _loadFontsAsync()
  // }, [])

  if (fontsLoaded) {
    return (
      <Provider theme={theme}>
        <Router />
      </Provider>
    )
  } else {
    return null
  }
}

export default App
