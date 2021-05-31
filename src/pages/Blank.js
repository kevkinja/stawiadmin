import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Button, Headline, Subheading, Text} from 'react-native-paper';
import FABButton from '../components/FABButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

export default class Blank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // navigation.openDrawer();
        return (
            <View style={styles.container}>
                <Subheading>{(this.props.route.name).toUpperCase()}</Subheading>
                <FABButton/>
            </View>

        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
});


