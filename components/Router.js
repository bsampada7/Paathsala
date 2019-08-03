import React, { Component, Fragment, useEffect } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CardList from './CardList'
import QuestionList from './QuestionList'
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
        navigationOptions: {
          title: 'Paathsala',
          headerLeft: (
          <TouchableOpacity >
            <Icon style={styles.menuIcon} name='menu' color='#E8EEEE' size={24} />
            </TouchableOpacity>
          )
        }
      },
      QuestionListUI: {
        screen: QuestionList,
        navigationOptions: {
          title: 'Class One'
        }
      }
    },
    {
      initialRouteName: 'ClassCard',
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
