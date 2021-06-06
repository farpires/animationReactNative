/**
 * interpolation
 */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated, View} from 'react-native';
const Animation4 = () => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 360, // the value the finish
      duration: 500, // the amount the temp finish
    }).start(); // iniciar animation
  }, []);

  const interpolation = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const styleAnimation = {
    transform: [{rotate: interpolation}],
  };

  return (
    <>
      <View>
        <Animated.View style={[styles.caja, styleAnimation]}></Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation4;
