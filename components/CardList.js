import React, { Fragment, useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  RefreshControl
} from 'react-native'
import firebase from 'react-native-firebase'
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'
import { Header, Left, Body, Button, Title, Drawer } from 'native-base'
import Icon from 'react-native-vector-icons/Feather'
import DrawerContent from './DrawerContent'
import { withTheme } from '../util/provider'

const Card = props => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: props.theme.secondaryColor
        }
      ]}
      onPress={() =>
        props.navigation.navigate('QuestionListUI', {
          classID: props.id,
          nav_name: props.header,
          header_background: props.theme.primaryColor
        })
      }
    >
      <Image style={styles.image} source={props.imgsrc} />
      {/* <Image style={{width:width}} source={props.imgsrc}   resizeMode="contain" /> */}

      <Text style={styles.sectionTitle}>{props.header}</Text>
    </TouchableOpacity>
  )
}

const CardList1 = props => {
  const [classes, setClasses] = useState({})
  const [isLoading, setisLoading] = useState(true)
  var db = firebase.firestore()
  const [userName, setUserName] = useState('UserName')

  const imgsrc = [
    require('./../res/classone.jpg'),
    require('./../res/classtwo.jpg'),
    require('./../res/classthree.jpg'),
    require('./../res/classfour.jpg'),
    require('./../res/classfive.jpg')
  ]

  const getData = () => {
    setisLoading(true)
    let tempClassArray = []
    db.collection('Levels')
      .orderBy('Order')
      .get()
      .then(snapshot => {
        setisLoading(false)

        snapshot.docs.forEach(doc => {
          tempClassArray.push(doc._data)
          setClasses({ ...tempClassArray })
        })
      })
      .catch(error => {
        console.log(error)
        setClasses(null)
      })
    let useremail = firebase.auth().currentUser._user.email
    let userdispname = firebase.auth().currentUser._user.displayName
      if(!userdispname){
        db.collection('Users')
        .where('Email', '==', useremail)
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            setUserName(doc._data.UserName)
          })
        })
        .catch(error => {
          console.log(error)
          setClasses(null)
        })
      }
      else{
        setUserName(userdispname);
      }

  }

  useEffect(() => {
    getData()
    console.log(props);
    // openDrawer()
    return () => {}
  }, [])

  const closeDrawer = () => {
    this.drawer._root.close()
  }
  const openDrawer = () => {
    this.drawer._root.open()
  }

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <Drawer
          ref={ref => {
            this.drawer = ref
          }}
          content={<DrawerContent navigation={props.navigation} userName = {userName}/>}
          onClose={() => closeDrawer}
        >
          <Header
            style={[
              styles.header,
              {
                backgroundColor: props.theme.primaryColor
              }
            ]}
          >
            <Left style={{ flex: 1 }}>
              <Button
                transparent
                onPress={() => {
                  openDrawer()
                }}
              >
                <Icon
                  style={styles.menuIcon}
                  name='menu'
                  color='#E8EEEE'
                  size={24}
                />
              </Button>
            </Left>
            <Body style={{ flex: 6 }}>
              <Title>Paathshala</Title>
            </Body>
          </Header>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={getData} />
            }
          >
            <View style={styles.body}>
              {/* <Text>{JSON.stringify(classes)}</Text> */}
              {classes == null && (
                <Text style={styles.internetAlert}>No Internet Connection</Text>
              )}
              {classes &&
                Object.keys(classes).map(key => (
                  <Card
                    key={key}
                    header={classes[key].Title}
                    id={classes[key].Id}
                    navigation={props.navigation}
                    imgsrc={imgsrc[key]}
                    theme={props.theme}
                  />
                ))}
            </View>
          </ScrollView>
        </Drawer>
      </SafeAreaView>
    </Fragment>
  )
}
const CardList = withTheme(CardList1)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    flex: 1
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
    // alignContent:'space-around',
  },
  card: {
    marginTop: 30,
    padding: 24,
    paddingBottom: 16,
    backgroundColor: '#DDA0DD',
    borderRadius: 16,
    minWidth: 100,
    maxWidth: 160
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
    paddingTop: 4
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
    textAlign: 'center'
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  },
  drawer: {
    flex: 1,
    backgroundColor: '#38C8EC',
    padding: 10
  },
  image: {
    height: 110,
    width: 110,
    alignSelf: 'center'
  },
  internetAlert: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#BA55D3'
  }
})

export default CardList
