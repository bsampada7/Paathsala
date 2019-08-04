import React from 'react';
import {AsyncStorage} from 'react-native'

export const saveLocalData = async (key, data) =>{ 
let d = await AsyncStorage.setItem(key, data);

    return d;

}

export const readLocalData = async key => {
    let d = await AsyncStorage.getItem(key);

    return d;
}