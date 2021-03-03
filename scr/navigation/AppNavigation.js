import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { FunctionScreen, SimpleScreen } from '../screens'
import ROUTE from '../constants/route'

const Stack = createStackNavigator()

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.SIMPLESCREEN}
      headerMode="none"
      mode="card"
    >
      <Stack.Screen name={ROUTE.FUNCTIONSCREEN} component={FunctionScreen} />
      <Stack.Screen name={ROUTE.SIMPLESCREEN} component={SimpleScreen} />
    </Stack.Navigator>
  )
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
