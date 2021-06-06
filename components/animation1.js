/**
 * timing
 */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated} from 'react-native';
const Animation1 = () => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1, // the value the finish
      duration: 500, // the amount the temp finish
    }).start(); // iniciar animation
  }, []);

  return (
    <>
      <Animated.View
        style={{
          opacity: animation,
        }}>
        <Text style={styles.txt}>Animation 1</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animation1;
