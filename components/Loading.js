import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

const Loading = props => {
useEffect(() => {
  firebase.auth().onAuthStateChanged(user => {
    props.navigation.navigate(user ? 'ClassCard' : 'LoginPageUI');
  })
  return () => {
  };
}, [])

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size='large' color='#DDA0DD'/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Loading
