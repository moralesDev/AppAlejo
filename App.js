import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigator'

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
