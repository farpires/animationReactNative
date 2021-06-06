/**
 * timing and duration
 */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated} from 'react-native';
const Animation2 = () => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 450, // the value the finish
      duration: 1000, // the amount the temp finish
    }).start(); // iniciar animation
  }, []);

  return (
    <>
      <Animated.View
        style={[styles.caja, {width: animation, height: animation}]}
      />
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

export default Animation2;
