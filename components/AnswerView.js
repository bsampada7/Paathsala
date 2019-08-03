import React, { Fragment,useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import firebase from 'react-native-firebase';

const QuestionView = (props) => {
const [answer, setAnswer] = useState('');
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{props.question}</Text>
            <TextInput
                style={styles.answerField}
                onChangeText={(text) => {setAnswer(text)}}
                value={answer}
            />
        </View>

    );

};
const AnswerView = (props) => {
     const [questions, setQuestions] = useState();
    var db = firebase.firestore();
    useEffect(() => {
        let tempArray = [];
        db.collection('Classes').orderBy('Order').get()
            .then(snapshot => {
                snapshot
                    .docs
                    .forEach(doc => {
                        console.log(tempArray);
                        tempArray.push(doc._data);
                        setQuestions({...tempArray});
                    });
            });

        return () => {
        };
    }, []);
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        {questions && Object.keys(questions).map( (key) => <QuestionView key={key} question={questions[key].Question}  /> )}
{/* 
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/>
                        <QuestionView question="What is  2 + 2?"/> */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
        // alignContent:'space-around',
    },
    sectionContainer: {
        margin: 15,
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: '#45a3e6',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.white,
        textAlign: "center",

    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.white,
        textAlign: "center",

    },
    answerField:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor:Colors.white,
     },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default QuestionList;
