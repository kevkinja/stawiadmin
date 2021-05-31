import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from "react-native-paper";

const Home = ({navigation}) => {
    // navigation.openDrawer();
    return (<View style={styles.container}>
        <TouchableOpacity onPress={navigation.openDrawer}>
            <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text>My Home</Text>
    </View>);
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    }
})


