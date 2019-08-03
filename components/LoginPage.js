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
  Switch,
  TextInput
  //   Button
} from 'react-native'
import { Button } from 'native-base'

const SignInForm = (props) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const handleUserNameInput = text => {
    setUsername(text)
  }
  const handlePasswordInput = text => {
    setPassword(text)
  }
  return (
    <View>
      <View style={styles.drawerOptions}>
        <TextInput
          value={username}
          onChangeText={text => {
            handleUserNameInput(text)
          }}
          placeholder={'Username'}
          style={styles.input}
        />
      </View>
      <View style={styles.drawerOptions}>
        <TextInput
          value={password}
          onChangeText={text => {
            handlePasswordInput(text)
          }}
          placeholder={'Password'}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <Button
        primary
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate('ClassCard')}
      >
        <Text style={styles.loginText}>Login</Text>
      </Button>
    </View>
  )
}

const SignUpForm = props => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleUserNameInput = text => {
    setUsername(text)
  }
  const handlePasswordInput = text => {
    setPassword(text)
  }
  const handleEmailInput = text => {
    setEmail(text)
  }
  return (
    <View>
      <View style={styles.drawerOptions}>
        <TextInput
          value={email}
          onChangeText={text => {
            handleEmailInput(text)
          }}
          placeholder={'Email'}
          style={styles.input}
        />
      </View>
      <View style={styles.drawerOptions}>
        <TextInput
          value={username}
          onChangeText={text => {
            handleUserNameInput(text)
          }}
          placeholder={'Username'}
          style={styles.input}
        />
      </View>

      <View style={styles.drawerOptions}>
        <TextInput
          value={password}
          onChangeText={text => {
            handlePasswordInput(text)
          }}
          placeholder={'Password'}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <Button
        primary
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate('ClassCard')}
      >
        <Text style={styles.loginText}>Sign Up</Text>
      </Button>
    </View>
  )
}

const LoginPage = props => {
  const [showSignIn, setShowSignIn] = useState(true)

  const handleSignIn = () => {
    setShowSignIn(true)
  }
  const handleSignUp = () => {
    setShowSignIn(false)
  }

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.userDetailsContainer}>
        <View style={styles.userImage}>
          <Image source={require('./../res/logo.png')} />
        </View>
      </View>
      <View style={styles.appSettings}>
        <View style={styles.signRow}>
          <Button
            transparent
            style={[styles.signIn, showSignIn && styles.activeSignBtn]}
            onPress={handleSignIn}
          >
            <Text style={styles.signText}>Sign In</Text>
          </Button>
          <Button
            transparent
            style={[styles.signUp, !showSignIn && styles.activeSignBtn]}
            onPress={handleSignUp}
          >
            <Text style={styles.signText}>Sign Up</Text>
          </Button>
        </View>
        {showSignIn ? (
          <SignInForm navigation={props.navigation} />
        ) : (
          <SignUpForm navigation={props.navigation} />
        )}
      </View>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
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
    flexDirection: 'column',
    alignContent: 'center'
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
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  drawerOptionsText: {
    fontSize: 20
  },
  input: {
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    minWidth: 250,
    paddingBottom: 0
  },
  signRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signIn: {
    margin: 15,
    padding: 10,
    marginRight: 2,
    borderWidth: 1,
    borderColor: '#CCC',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16
  },
  signUp: {
    margin: 15,
    padding: 10,
    marginLeft: 2,
    borderWidth: 1,
    borderColor: '#CCC',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16
  },
  signText: {
    color: '#AAA',
    fontSize: 24,
    fontWeight: 'bold'
  },
  loginBtn: {
    margin: 15,
    padding: 30,
    borderWidth: 0,
    borderRadius: 8,
    alignSelf: 'center'
  },
  loginText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  activeSignBtn: {
    borderColor: '#DDA0DD',
    borderWidth: 2
  }
})

export default LoginPage
