import React, { Fragment, useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  RefreshControl,
  KeyboardAvoidingView
} from 'react-native'

import {Badge} from 'native-base';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'
import Icon from 'react-native-vector-icons/Feather'
import firebase from 'react-native-firebase'

const QuestionView = props => {
  const [answerInput, setAnswerInput] = useState('')
  const [istyping, setIstyping] = useState(true)
  const [correctAns, setCorrectAns] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleAnswerSubmit = () => {
    setIstyping(false)
    props.answer == answerInput ? setCorrectAns(true) : setCorrectAns(false)
  }
  const handleAnswerInput = text => {
    setIstyping(true)
    setAnswerInput(text)
  }
  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }
  return (
    <View style={styles.questionCard}>
      <Text style={styles.sectionTitle}>{props.question}</Text>
      <View style={styles.inputFieldView}>
        <TextInput
          style={styles.answerField}
          onChangeText={text => {
            handleAnswerInput(text)
          }}
          onSubmitEditing ={event => {
            handleAnswerSubmit()
          }}
          value={answerInput}
          placeholder ="Type your answer here"
        />
        <TouchableOpacity onPress={handleAnswerSubmit}>
          {istyping ? (
            <Icon
              style={styles.submitIcon}
              name='arrow-right'
              color='#E8EEEE'
              size={16}
            />
          ) : (
            <Icon
              style={styles.submitIcon}
              name={correctAns ? 'smile' : 'frown'}
              color={correctAns ? 'green' : 'red'}
              size={24}
            />
          )}
        </TouchableOpacity>
      </View>
      <View>
        {!istyping && 
      <TouchableOpacity onPress={handleShowAnswer}>
      <Badge info>
          <Text style={styles.showBtnText}>
            {' '}
            {(showAnswer ? 'Hide ' : 'Show ') +
              (correctAns ? 'Explaination' : 'Answer')}
          </Text>
          </Badge>
          </TouchableOpacity>}
      {showAnswer && <Text> {props.answer}</Text>}
      </View>
    </View>
  )
}
const QuestionList = props => {
  const [questions, setQuestions] = useState()
  const [isLoading, setisLoading] = useState(true)

  const {navigation}=props;
  let classID=navigation.state.params&&navigation.state.params.classID;
  console.log("CLASS ID",classID)

  var db = firebase.firestore()
  const getData = () => {
    setisLoading(true)
    let tempArray = []
    db.collection('Classes')
    .where('ClassId','==',classID)
      // .orderBy('Order')
      .get()
      .then(snapshot => {
        console.log("got snapshot")
    setisLoading(false)
        snapshot.docs.forEach(doc => {
          tempArray.push(doc._data)
          
        })
        console.log(tempArray)

        let newtemp=tempArray.sort((a,b)=>{return a.Order-b.Order});
        console.log(newtemp,tempArray)
        setQuestions({ ...newtemp })

      }).catch((error)=>{
        console.log("error cought",error)
      })

  }
  useEffect(() => {
    
    getData();
    return () => {}
  }, [])
  return (
    <Fragment>
      <KeyboardAvoidingView behavior='height' enabled style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={getData} />
          }
        >
          {/* <View style={styles.body}> */}
            {questions &&
              Object.keys(questions).map(key => (
                <QuestionView
                  key={key}
                  question={questions[key].Question}
                  answer={questions[key].Answer}
                />
              ))}
          {/* </View> */}
        </ScrollView>
      </SafeAreaView>
      </KeyboardAvoidingView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex:1,
  },
  body: {
    backgroundColor: Colors.white
    // alignContent:'space-around',
  },
  questionCard: {
    margin: 15,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#DDA0DD',
    borderRadius: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'left'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
    textAlign: 'center'
  },
  answerField: {
    height: 45,
    borderColor: 'gray',
    backgroundColor: Colors.white,
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRightWidth: 0,
    borderWidth: 0,
    color: '#424242',
    borderRadius: 16


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
  inputFieldView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 16
  },
  submitIcon: {
    padding: 10
  },
  showBtn: {
    backgroundColor: '#000',
    width: 180,
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    textAlign: 'center'
  },
  showBtnText: {
    color: '#FFF',
    fontSize: 16
  }
})

export default QuestionList
