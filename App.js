import React, { Component, Fragment, useEffect } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CardList from './components/CardList';
import QuestionList from './components/QuestionList';
import firebase from 'react-native-firebase';

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


// docRef.get().then(function(doc) {
//   console.log("inside then");
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
// console.log("after get");


// db.collection('Classes').get()
//   .then(snapshot => {
//     console.log(snapshot);
//     snapshot
//       .docs
//       .forEach(doc => {
//         console.log("json");
//         console.log(JSON.parse(doc._document.data.toString()))
//       });
//   });
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
  const db = firebase.firestore();

useEffect(() => {
  db.collection('Classes').get()
  .then(snapshot => {
    snapshot
      .docs
      .forEach(doc => {
        console.log(doc._data,typeof(doc._data));
        // console.log(JSON.parse(doc._data.toString()))
      });
  });
  return () => {
  };
}, [])
  return (
    <AppContainer />
  );
}
// class App extends React.Component{


//   render(){
//   return (
//     <AppContainer />
//   );
//   }

//   componentDidMount(){
//     db.collection('Classes').get()
//   .then(snapshot => {
//     console.log(snapshot);
//     snapshot
//       .docs
//       .forEach(doc => {
//         console.log("json");
//         console.log(doc._data,typeof(doc._data));
//         console.log(doc._data.Total);
//         // console.log(JSON.parse(doc._data.toString()))
//       });
//   });
  
//   }
// }
export default App;