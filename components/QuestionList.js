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
  TouchableOpacity
} from 'react-native'

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
      {!istyping && (
        <TouchableOpacity style={styles.showBtn} onPress={handleShowAnswer}>
          <Text style={styles.showBtnText}>
            {' '}
            {(showAnswer ? 'Hide ' : 'Show ') +
              (correctAns ? 'Explaination' : 'Answer')}
          </Text>
        </TouchableOpacity>
      )}
      {showAnswer && <Text> {props.answer}</Text>}
    </View>
  )
}
const QuestionList = props => {
  const [questions, setQuestions] = useState()
  const {navigation}=props;
  let classID=navigation.state.params&&navigation.state.params.classID;
  console.log("CLASS ID",classID)

  var db = firebase.firestore()
  useEffect(() => {
    let tempArray = []
    db.collection('Classes')
    .where('ClassId','==',classID)
      .orderBy('Order')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          console.log(tempArray)
          tempArray.push(doc._data)
          setQuestions({ ...tempArray })
        })
      })

    return () => {}
  }, [])
  return (
    <Fragment>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
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
    </Fragment>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
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
