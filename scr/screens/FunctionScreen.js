import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const FunctionScreen = ({ navigation }) => {
  const goToBackScreen = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Text>FunctionScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => goToBackScreen()}>
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
  button: {
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 8,
    marginVertical: 20,
  },
})
