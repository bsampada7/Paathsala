import React, { Component, Fragment, useEffect, useState } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'

const AboutUs = () => {
  return (
    <View>
      <Text style={styles.appname}>AppName : Paathsala</Text>
      <Text style={styles.description}>Description: This is a sample app that contains Math questions for the students studying from Class One to Class Five</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  appname: {
    fontSize:16,
    margin: 20,
  },
  description:{
    fontSize:16,
    margin: 20,
    marginTop:0
  }
})

export default AboutUs
