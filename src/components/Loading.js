import React from 'react';
import {View, Text} from 'react-native';
import {Caption, Headline} from 'react-native-paper';

const Loading = loading => {
    if (!loading) {
        return false;
    }
    return (
        <View style={{backgroundColor: '#eeeeff', padding: 10, alignItems: 'center', position: 'absolute', zIndex:1000, width: '100%'}}>
            <Headline>Loading</Headline>
            <Caption>Please wait</Caption>
        </View>);
};
export default Loading;
