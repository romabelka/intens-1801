import React from 'react';
import {observer} from 'mobx-react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {useStores} from "../stores";

export default observer(function HomeScreen({ navigation }) {
  const { counterStore } = useStores()

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.text}>{counterStore.count}</Text>
      <Button title="increment" onPress={counterStore.incrementCount}/>
      <Button title="go to people list" onPress = {() => navigation.navigate('people')}/>
    </View>
  );
})

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
