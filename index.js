/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import App from './App';
// import QuestionList  from './components/QuestionList';
// import CardList  from './components/CardList';
import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => CardList);
AppRegistry.registerComponent(appName, () => App);
