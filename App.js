import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import {Header} from './src/components/common';
import combineReducers from './src/components/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {createStore(combineReducers)}>  
        <View style={styles.container}>
          <Header headerText={'Tech Stack'}></Header>
          <Text style={styles.footStyle}>Trong Binh Le</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footStyle:{
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 2,
    paddingTop: 5,
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold', 
    fontStyle: 'italic',
  }
});
