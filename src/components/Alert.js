import React from 'react';
import {View} from 'react-native';
import {Caption, Paragraph} from 'react-native-paper';
import ErrorDisplay from '../errors/ErrorDisplay';

export default function Alert({message, status, error}) {
    const colors = {error: '#bb2222', success: 'green'}
    const theme = colors[status] ? colors[status] : '#ff9933'
    if (!message) return false;
    return (<View style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 14,
        backgroundColor: theme
    }}>
        <ErrorDisplay res={error}/>

    </View>)

}
