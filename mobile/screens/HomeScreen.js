import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    backgroundColor: '#ddd',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: '#000',
    elevation: 5
  }
});
