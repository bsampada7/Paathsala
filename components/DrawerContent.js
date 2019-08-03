import React, { Component, Fragment, useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Switch
} from 'react-native'
import { Row } from 'native-base'

const DrawerContent = () => {
  const [themeColor, setthemeColor] = useState(false)
  const changeThemeColor = () => {
    setthemeColor(!themeColor)
  }
  // const switchColor =
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.userDetailsContainer}>
        <View style={styles.userImage}>
          <Image
            source={require('./../res/classone.jpg')}
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
          />
          <Text style={styles.userName}>UserName</Text>
        </View>
      </View>
      <View style={styles.appSettings}>
      <View style={styles.colorRow}>

      <Text style={styles.themeText}>Change Theme</Text>
        <Switch
          style={styles.switchColor}
          onValueChange={changeThemeColor}
          value={themeColor}
          trackColor={{ false: 'blue', true: '#BA55D3' }}
          thumbColor='#CCC'
        />
      </View>
      </View>

      {/* <Text>Thhis is drawer content</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  userDetailsContainer: {
    flex: 1,
    backgroundColor: '#BA55D3',
    alignItems: 'stretch'
  },
  userImage: {
    flex: 2,
    backgroundColor: '#BA55D3',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  userInfo: {
    flex: 3,
    backgroundColor: 'white'
  },
  userName: {
    padding: 15,
    fontSize: 16
  },
  userInfoExtra: {
    flex: 1,
    backgroundColor: '#BA55D3'
  },
  appSettings: {
    flex: 3,
    backgroundColor: 'white',
    flexDirection:'column'
  },
  colorRow:{
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-between',
    color:'#CCC',

  },
  themeText:{
    margin:15,
    fontSize:20,
  },
  switchColor: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    // backgroundColor: '#000',
    margin:15,
  },
})

export default DrawerContent
