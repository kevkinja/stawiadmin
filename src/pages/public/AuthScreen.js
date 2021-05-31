import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Blank from '../Blank';
import {Button} from 'react-native-paper';
import {AuthContext} from '../../AuthContext';

export default function AuthScreen() {

    const {currentUser, setCurrentUser} = useContext(AuthContext);

    return <View>
        <Button onPress={() => {
            setCurrentUser(true);
            console.warn('New Page');
        }}>Login </Button>

       <Text> {currentUser ? "Logged In" : "No Loggedd In"}</Text>
    </View>;


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    slide: {
        backgroundColor: '#ccc',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    title: {},
});
