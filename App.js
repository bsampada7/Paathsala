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
import { AppContextProvider } from './util/provider';



const App = () => {
  const [open, setOpen] = useState(false);
  const DrawerContentParameter = (
    <DrawerContent/>
  );

  const handleMenuTouch = () =>{
      setOpen(true);
  }

  return (
      <AppContextProvider>
      <Router/>
      </AppContextProvider>
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