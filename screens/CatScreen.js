import *as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class CatScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Cat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CatScreen;