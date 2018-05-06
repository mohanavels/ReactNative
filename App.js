import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ContactList, ContactListItem, CustomLayout } from './components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu. khkh</Text>
        <CustomLayout/>
        <ContactList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
