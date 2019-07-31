import React, { Fragment, useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Card = (props) => {
    return (
        <TouchableOpacity style={styles.sectionContainer} onPress={() => props.navigation.navigate('QuestionListUI')}>
            <Text style={styles.sectionTitle}>{props.header}</Text>
            <Text style={styles.sectionDescription}>
                10 Questions
            </Text>
        </TouchableOpacity>

    );

};
const CardList = (props) => {
    const [classes, setClasses] = useState([]);
    var db = firebase.firestore();
    useEffect(() => {
        let tempClassArray = [];
        db.collection('Levels').get()
            .then(snapshot => {
                snapshot
                    .docs
                    .forEach(doc => {
                        tempClassArray.push(doc._data);
                        setClasses(tempClassArray);
                    });
            });

        return () => {
        };
    }, []);
    useEffect(() => {
        console.log(classes);
        return () => {
        };
    }, [classes])
    let classes1 = { Title: 'Class One', Id: "Class1" };
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        {/* { classes1.map( (class, i) => <Card header={class.Title} id = {class.Id} navigation={props.navigation} /> )} */}
                        <Card header={classes1.Title} id={classes1.Id} navigation={props.navigation} />
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
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignContent:'space-around',
    },
    sectionContainer: {
        margin: 15,
        marginTop: 30,
        paddingHorizontal: 24,
        width: 160,
        paddingVertical: 20,
        height: 160,
        backgroundColor: '#45a3e6',
        borderRadius: 16,
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

export default CardList;
