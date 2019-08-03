import React, { Component, Fragment, useEffect } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CardList from './CardList'
import QuestionList from './QuestionList'
import DrawerContent from './DrawerContent'
import AboutUs from './AboutUs'
import LoginPage from './LoginPage'
import Icon from 'react-native-vector-icons/Feather'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native'

const styles = StyleSheet.create({
  menuIcon: {
    flex: 1,
    padding: 15
  }
})



const Router = (props) => {
  const RootStack = createStackNavigator(
    {
      ClassCard: {
        screen: CardList,
        navigationOptions:{
          header: null,
        }
      },
      QuestionListUI: {
        screen: QuestionList,
        navigationOptions: ({ navigation }) => {
          let params=navigation.state.params ||{};

          return {
            title: params.nav_name||"N/A"
          }
        }
      },
      AboutUsUI: {
        screen: AboutUs,
        navigationOptions: {
          title : "About Us"
        }
      },
      LoginPageUI: {
        screen: LoginPage,
        navigationOptions: {
          header : null
        }
      },
    },
    {
      initialRouteName: 'LoginPageUI',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#BA55D3'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
    }
  )
  
  const AppContainer = createAppContainer(RootStack)

  return <AppContainer />
}



export default Router
