import React, { Component, Fragment } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CardList from './components/CardList';
import QuestionList from './components/QuestionList';
// import firebase from 'react-native-firebase';

// const AppNavigator = StackNavigator({
//     CardListScreen: { screen: CardList },
//     QuestionListScreen: { screen: QuestionList }
// });
// firebase.initializeApp({
//   apiKey: '### AIzaSyBk98fPdQk78O2bPUcD8eY_-caTiz0MryM ###',
//   authDomain: '### paathsala-3a431.firebaseapp.com ###',
//   projectId: '### paathsala-3a431 ###'
// });

// var db = firebase.firestore();
// var docRef = db.collection("Classes").doc("Class1");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
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