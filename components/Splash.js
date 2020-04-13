/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Animated, Easing, Text, Image, StatusBar, StyleSheet,Dimensions } from 'react-native';
const {height,width} = Dimensions.get('screen');

export default function Splash(props) {
  const [spinAnim, setSpinAnim] = React.useState(new Animated.Value(0));

  useEffect(() => {
    setTimeout(function () {
      props.navigation.replace('Covid');
    }, 5000);
  }, [props.navigation]);



  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>

      <View style={{  justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar translucent backgroundColor="transparent" />
        <Animated.Image
          style={{ height: 100, width: 100 }}
          source={require('../images/favicon.png')} />
          <Animated.Image
          style={{ marginTop:20,height: 70, width: width * 0.85 }}
          source={require('../images/image.png')} />
      </View>
    </View>
  );

}
