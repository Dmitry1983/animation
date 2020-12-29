import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  SafeAreaView,
} from 'react-native'

const HEADER_MIN_HEIGHT = 50
const HEADER_MAX_HEIGHT = 200

export default class App extends Component {
  constructor() {
    super()

    this.scrollYAnimatedValue = new Animated.Value(0)

    this.array = []
  }

  UNSAFE_componentWillMount() {
    for (var i = 1; i <= 75; i++) {
      this.array.push(i)
    }
  }

  render() {
    const headerHeight = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    })

    const headerBackgroundColor = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: ['red', 'grey'],
      extrapolate: 'clamp',
    })

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={20}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: this.scrollYAnimatedValue },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          {this.array.map((item, key) => (
            <View key={key} style={styles.item}>
              <Text style={styles.itemText}>Title number : {item}</Text>
            </View>
          ))}
        </ScrollView>

        <Animated.View
          style={[
            styles.animatedHeaderContainer,
            { height: headerHeight, backgroundColor: headerBackgroundColor },
          ]}
        >
          <Text style={styles.headerText}>Animated Header</Text>
        </Animated.View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  animatedHeaderContainer: {
    position: 'absolute',
    top: Platform.OS == 'ios' ? 0 : 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
  },
  item: {
    backgroundColor: '#ff9e80',
    marginVertical: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: 16,
  },
})
