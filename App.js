import React, { Component, useEffect, useRef } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'

const HEADER_MIN_HEIGHT = 100
const HEADER_MAX_HEIGHT = 240

const imageSource = require('./assets/img.png')

export default class App extends Component {
  constructor() {
    super()

    this.scrollYAnimatedValue = new Animated.Value(0)

    this.array = []
  }

  UNSAFE_componentWillMount() {
    for (var i = 1; i <= 50; i++) {
      this.array.push(i)
    }
  }

  render() {
    // Аналогично componentDidMount и componentDidUpdate:

    const headerHeight = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    })

    const headerBackgroundColor = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: ['red', 'orange'],
      extrapolate: 'clamp',
    })

    const headerOpacity = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })
    const headerTitleColor = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: ['white', 'black'],
      extrapolate: 'clamp',
    })

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.animatedHeaderContainer,
            {
              height: headerHeight,
              backgroundColor: '#20232A',
              //backgroundColor: headerBackgroundColor,
              // opacity: headerOpacity,
            },
          ]}
        >
          <Animated.Image
            style={[
              styles.animatedHeaderContainer,
              {
                height: headerHeight,
                //backgroundColor: headerBackgroundColor,
                backgroundColor: 'orange',
                opacity: headerOpacity,
                width: '100%',
              },
            ]}
            source={imageSource}
          ></Animated.Image>
          <Text style={styles.headerText}>Header</Text>
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollViewStyle}
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
            <TouchableOpacity key={key} style={styles.item}>
              <Text style={styles.itemText}>Title number : {item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'darkgray',
  },
  scrollViewStyle: {
    paddingTop: 1,
  },
  animatedHeaderContainer: {
    top: Platform.OS == 'ios' ? 0 : 0,
    justifyContent: 'flex-end',
    // paddingBottom: 15,
    alignItems: 'center',
  },
  headerText: {
    position: 'absolute',
    paddingBottom: 10,
    color: 'white',
    fontSize: 26,
  },
  item: {
    backgroundColor: 'lightgrey',
    marginVertical: 0.5,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: 20,
  },
})
