import React, { Component, Fragment, useEffect, useState } from 'react'
import MenuDrawer from 'react-native-side-drawer'
import Router from './components/Router'
import DrawerContent from './components/DrawerContent';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'



const App = () => {
  const [open, setOpen] = useState(false);
  const DrawerContentParameter = (
    <DrawerContent/>
  );

  const handleMenuTouch = () =>{
      setOpen(true);
  }

  return (
    <MenuDrawer
      open={open}
      drawerContent={DrawerContentParameter}
      drawerPercentage={50}
      animationTime={100}
      overlay = {true}
      opacity={0.5}
    >
           <TouchableOpacity onPress = {() => {setOpen(!open)}}>
                    <Text>Toggling drawer</Text>
                    </TouchableOpacity>
      <Router/>
    </MenuDrawer>
  )
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#38C8EC',
    padding: 10
  }
});

export default App
