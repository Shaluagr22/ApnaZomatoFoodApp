import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigators from './src/navigations/AppNavigators';

const App = () => {
  return (
    <View style={styles.root}>
     <AppNavigators/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
}
);
export default App;
