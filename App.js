import React, { Component, Fragment } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CardList from './components/CardList';
import QuestionList from './components/QuestionList';

// const AppNavigator = StackNavigator({
//     CardListScreen: { screen: CardList },
//     QuestionListScreen: { screen: QuestionList }
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