/**
 * Text Animation
 */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated, View} from 'react-native';
const Animation3 = () => {
  const [animation] = useState(new Animated.Value(14));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 40, // the value the finish
      duration: 500, // the amount the temp finish
    }).start(); // iniciar animation
  }, []);

  return (
    <>
      <View>
        <Animated.Text style={[styles.txt,{fontSize: animation}]}>Animation 1</Animated.Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animation3;
