import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { GridScreen, FruitListView } from '../screens'

const Stack = createStackNavigator()
const INITIAL_ROUTE_NAME = 'GridScreen'

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GridScreen" component={GridScreen} />
        <Stack.Screen name="FruitListView" component={FruitListView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
