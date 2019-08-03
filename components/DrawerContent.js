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
import AntIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DrawerContent = props => {
  const [themeColor, setthemeColor] = useState(false)
  const changeThemeColor = () => {
    setthemeColor(!themeColor)
  }

  return (
    <ScrollView style={{flex:1,backgroundColor:'white'}}>
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
            onValueChange={changeThemeColor}
            value={themeColor}
            trackColor={{ false: 'blue', true: '#BA55D3' }}
            thumbColor='#CCC'
          />
        </View>

        <View style={styles.drawerOptionsIcon}>        
        <TouchableOpacity
          style={styles.drawerOptions}
          onPress={
            () => props.navigation.navigate('AboutUsUI')
          }
        >
          <Text style={styles.drawerOptionsText}>About Us</Text>
        </TouchableOpacity>
          <AntIcon name='questioncircleo' color='#888' size={24} style={styles.drawerOptions} />
        </View>
        <View style={styles.drawerOptionsIcon}>        
        <TouchableOpacity
          style={styles.drawerOptions}
          onPress={
            () => console.log("logout")
          }
        >
          <Text style={styles.drawerOptionsText}>Log Out</Text>
        </TouchableOpacity>
          <Icon name='logout' color='#888' size={24} style={styles.drawerOptions} />
        </View>
      </View>
    </View>
    </ScrollView>
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
    paddingTop:20,
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
