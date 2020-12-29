import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const FunctionScreen = ({ navigation }) => {
  const goToBackScreen = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Text>FunctionScreen</Text>
      <TouchableOpacity onPress={() => goToBackScreen()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})
