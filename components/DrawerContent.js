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

const DrawerContent = () => {
  return (
    <View style={styles.drawer}>
    <Text>is this kidding me</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#38C8EC',
    padding: 10,
    opacity:1
  }
});

export default DrawerContent;
