import React from 'react';
import Route from './Route';
import {StatusBar} from 'react-native'
import {AuthProvider} from './AuthContext';
import axios from 'axios';


export default class App extends React.Component {
    componentDidMount() {
        const BASEURL = 'http://192.168.100.35/api/app/';
        axios.defaults.baseURL = BASEURL;
        axios.defaults.headers.get['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        // axios.defaults.headers.common = cookie.load('AuthToken');
    }

    render() {
        return <AuthProvider>
            <StatusBar
                animated={true}
                backgroundColor="#ffffff"
                statusBarStyle={'light-content'}
                barStyle={'dark-content'}
            />
            <Route/>

        </AuthProvider>;
    }


}


