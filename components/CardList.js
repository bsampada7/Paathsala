import React, { Fragment, useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  Image
} from 'react-native'
import firebase from 'react-native-firebase'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

const Card = props => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        props.navigation.navigate('QuestionListUI', {
          classID: props.id
        })
      }
    >
      <Image style={styles.image} source={props.imgsrc} />
      <Text style={styles.sectionTitle}>{props.header}</Text>
    </TouchableOpacity>
  )
}
const CardList = props => {
  const [classes, setClasses] = useState();
  const [isloading, setisloading] = useState(true)
  // const [state, setstate] = useState(initialState)
  var db = firebase.firestore();

  const imgsrc = [
    require('./../res/classone.jpg'),
    require('./../res/classtwo.jpg'),
    require('./../res/classthree.jpg'),
    require('./../res/classfour.jpg'),
    require('./../res/classfive.jpg')
  ];

  useEffect(() => {
    let tempClassArray = []
    db.collection('Levels')
      .orderBy('Order')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          tempClassArray.push(doc._data)
        });
        setisloading(false);
        setClasses({ ...tempClassArray })
      })

    return () => {}
  }, [])

  return (
    <Fragment>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
          refreshControl = {
            <RefreshControl refreshing = />
          }
        >
          <View style={styles.body}>
            {classes &&
              Object.keys(classes).map(key => (
                <Card
                  key={key}
                  header={classes[key].Title}
                  id={classes[key].Id}
                  navigation={props.navigation}
                  imgsrc = {imgsrc[key]}
                />
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
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
  }
})

export default CardList
