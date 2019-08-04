import React, { Component, Fragment, useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppConsumer } from './../util/provider'
import { FuschiaTheme, BlueTheme } from './../util/theme'
import { Switch } from 'native-base'
import firebase from 'react-native-firebase'


const DrawerContent = props => {
  const [themeColor, setthemeColor] = useState(false)

  const handleLogOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("Sign-out successful.")
      props.navigation.navigate('LoginPageUI')// Sign-out successful.
    }).catch(function(error) {
      console.log("Sign-out error.",error)// Sign-out successful.
      // An error happened.
    });
  }

  return (
    <AppConsumer>
      {appConsumer => {
        return (
          <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.drawerContainer}>
              <View style={styles.userDetailsContainer}>
                <View
                  style={[
                    styles.userImage,
                    {
                      backgroundColor: themeColor
                        ? BlueTheme.primaryColor
                        : FuschiaTheme.primaryColor
                    }
                  ]}
                >
                  <Image
                    source={require('./../res/unknown.jpg')}
                    style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                  />
                  <Text style={styles.userName}>{props.userName}</Text>
                </View>
              </View>
              <View style={styles.appSettings}>
                <TouchableOpacity
                  style={styles.drawerOptions}
                  onPress={() => this.drawer._root.close()}
                >
                  <Text style={styles.drawerOptionsText}>Home</Text>
                </TouchableOpacity>

                <View style={styles.drawerOptionsIcon}>
                  <Text style={styles.themeText}>Change Theme</Text>
                  <Switch
                    style={styles.switchColor}
                    onValueChange={value => {
                      console.log('VALUE IS', value)
                      setthemeColor(value)
                      appConsumer.updateTheme(value ? BlueTheme : FuschiaTheme)
                    }}
                    value={themeColor}
                    trackColor={{
                      true: BlueTheme.primaryColor,
                      false: FuschiaTheme.primaryColor
                    }}
                    thumbColor='#CCC'
                  />
                </View>

                <TouchableOpacity
                  style={styles.drawerOptionsIcon}
                  onPress={() => props.navigation.navigate('AboutUsUI')}
                >
                  <View style={styles.drawerOptions}>
                    <Text style={styles.drawerOptionsText}>About Us</Text>
                  </View>
                  <AntIcon
                    name='questioncircleo'
                    color='#888'
                    size={24}
                    style={styles.drawerOptions}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.drawerOptionsIcon}
                  onPress={handleLogOut}
                >
                  <View style={styles.drawerOptions}>
                    <Text style={styles.drawerOptionsText}>Log Out</Text>
                  </View>
                  <Icon
                    name='logout'
                    color='#888'
                    size={24}
                    style={styles.drawerOptions}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )
      }}
    </AppConsumer>
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
    justifyContent: 'flex-end',
    paddingTop: 20
  },
  userInfo: {
    flex: 3,
    backgroundColor: 'white'
  },
  userName: {
    padding: 15,
    fontSize: 16,
    color:'#FFF'
  },
  userInfoExtra: {
    flex: 1,
    backgroundColor: '#BA55D3'
  },
  appSettings: {
    flex: 3,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  drawerOptionsIcon: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    color: '#CCC'
  },
  themeText: {
    margin: 15,
    fontSize: 20
  },
  switchColor: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    // backgroundColor: '#000',
    margin: 15
  },
  drawerOptions: {
    margin: 15
  },
  drawerOptionsText: {
    fontSize: 20
  }
})

export default DrawerContent
