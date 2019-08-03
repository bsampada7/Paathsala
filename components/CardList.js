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
import {Header, Left, Body,Button,Title,Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/Feather'
import DrawerContent from './DrawerContent';


const Card = props => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        props.navigation.navigate('QuestionListUI', {
          classID: props.id,
          nav_name:props.header
        })
      }
    >
      <Image style={styles.image} source={props.imgsrc} />
      <Text style={styles.sectionTitle}>{props.header}</Text>
    </TouchableOpacity>
  )
}
const CardList = props => {
  const [classes, setClasses] = useState({})
  const [isLoading, setisLoading] = useState(true)
  var db = firebase.firestore()

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
        setClasses(null);
      })
  }

  useEffect(() => {
    getData();
    openDrawer()
    return () => {}
  }, [])

  const closeDrawer= () => {
    this.drawer._root.close()
  };
  const openDrawer= () => { this.drawer._root.open() };

  return (
    <Fragment>
      <SafeAreaView style={{flex:1}}>
      <Drawer ref={(ref) => { this.drawer = ref; }}  content={<DrawerContent/>}
       onClose={() => closeDrawer}
       >
      <Header>
          <Left>
            <Button transparent onPress={()=>{
              openDrawer()
            }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
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
            {classes==null && <Text  style={styles.internetAlert}>No Internet Connection</Text>}
            {classes &&
              Object.keys(classes).map(key => (
                <Card
                  key={key}
                  header={classes[key].Title}
                  id={classes[key].Id}
                  navigation={props.navigation}
                  imgsrc={imgsrc[key]}
                />
              ))}
          </View>
        </ScrollView>
        </Drawer>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#000",
    flex:1,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
    // alignContent:'space-around',
  },
  card: {
    margin: 15,
    marginTop: 30,
    paddingHorizontal: 24,
    width: 160,
    paddingVertical: 20,
    height: 160,
    backgroundColor: '#DDA0DD',
    borderRadius: 16
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center'
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
    height: 100,
    width: 110
  },
  internetAlert: {
    textAlign: "center",
  }
})

export default CardList
