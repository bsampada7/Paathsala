import React, { Component, Fragment } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CardList from './components/CardList';
import QuestionList from './components/QuestionList';
import firebase from 'react-native-firebase';

// const AppNavigator = StackNavigator({
//     CardListScreen: { screen: CardList },
//     QuestionListScreen: { screen: QuestionList }
// });
firebase.initializeApp({
  apiKey: '### AIzaSyBk98fPdQk78O2bPUcD8eY_-caTiz0MryM ###',
  authDomain: '### paathsala-3a431.firebaseapp.com ###',
  projectId: '### paathsala-3a431 ###'
});

var db = firebase.firestore();
db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
const RootStack = createStackNavigator(
    {
      ClassCard: CardList,
      QuestionListUI: QuestionList,
    },
    {
      initialRouteName: 'ClassCard',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);

const App = () => {
    return (
        <AppContainer/>
    );
}
export default App;