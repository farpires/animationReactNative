import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
const Animation5 = () => {
  const [animation] = useState(new Animated.Value(1));

  const preesInBtn = () => {
    Animated.spring(animation, {
      toValue: 0.8,
    }).start();
  };

  const pressOutBtn = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 4, // 7 es el predeterminado rebote - mas bajo mayor rebote
      tension: 60, //movimiento
    }).start();
  };

  const styleAnimation = {
    transform: [{scale: animation}],
  };

  return (
    <View style={styles.contents}>
      <TouchableWithoutFeedback
        onPressIn={() => preesInBtn()}
        onPressOut={() => pressOutBtn()}>
        <Animated.View style={[styles.btn, styleAnimation]}>
          <Text style={styles.txt}>Iniciar sesccion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
});

export default Animation5;
