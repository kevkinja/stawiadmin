import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

const Logo = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>LAWWIZ <Icon name={'key'} size={30}/> AFRICA</Text>
        </View>);
}


export default Logo;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    }
})



