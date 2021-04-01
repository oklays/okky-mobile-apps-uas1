import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GetStarted } from '../screens'

const Stack = createStackNavigator()
const INITIAL_ROUTE_NAME = 'GetStarted'

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
