import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

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
                {props.description}
            </Text>
        </TouchableOpacity>

    );

};
const CardList = (props) => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <Card header="Class One" description = "10 Questions" navigation={props.navigation}/>
                        <Card header="Class Two" description = "10 Questions" navigation={props.navigation}/>
                        <Card header="Class Three" description = "10 Questions" navigation={props.navigation}/>
                        <Card header="Class Four" description = "10 Questions" navigation={props.navigation}/>
                        <Card header="Class Five" description = "10 Questions" navigation={props.navigation}/>
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
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        // alignContent:'space-around',
    },
    sectionContainer: {
        margin: 15,
        marginTop:30,
        paddingHorizontal: 24,
        width:160,
        paddingVertical:20,
        height:160,
        backgroundColor:'#45a3e6',
        borderRadius:16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.white,
        textAlign:"center",

    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.white,
        textAlign:"center",

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
