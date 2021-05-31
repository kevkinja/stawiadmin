/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StatusBar,
} from 'react-native';
import {AuthProvider} from './AuthContext';
import Route from './Route';
import {themeColors} from './utilities/Defaults';


export default function App() {
    return (<>
        <AuthProvider>
            <StatusBar
                animated={true}
                backgroundColor={themeColors.primary}
                statusBarStyle={'light-content'}
                barStyle={'light-content'}/>
            <Route/></AuthProvider></>);

}

