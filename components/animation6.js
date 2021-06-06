import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
const Animation6 = () => {
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
        Animated.sequence([
            Animated.timing(animation2, {
              toValue: -30,
              duration: 0,
            }),
            Animated.timing(animation1, {
              toValue: 60,
              duration: 500,
            }),
            Animated.timing(animation2, {
              toValue: 30,
              duration: 500,
            }),
            Animated.timing(animation1, {
              toValue: 0,
              duration: 500,
            }),
            Animated.timing(animation2, {
              toValue: -30,
              duration: 500,
            }),
          ])
    ).start();
  }, []);

  const stylesAnimation = {
      transform: [
          {translateX: animation2},
          {translateY: animation1}, //translateYmovimiento de arriba a abajo
      ]
  } 

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={[
          styles.box,
          stylesAnimation
          ]}
          >
          </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: 10,
    height: 10,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animation6;
