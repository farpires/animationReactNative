// una animacion tras una animacion una y otra y otra
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Animation1 from './components/animation1';
// import Animation2 from './components/animation2';
// import Animation3 from './components/animation3';
// import Animation4 from './components/animation4';
// import Animation5 from './components/animation5';
// import Animation6 from './components/animation6';
import Animation7 from './components/animation7';
const App = () => {
  return (
    <>
      <View style={styles.contents}>
        <Animation7 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contents: {
    marginTop: 100,
  },
});

export default App;
