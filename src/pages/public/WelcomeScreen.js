import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Blank from '../Blank';
import {Button} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';


export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {title: 'title 1'},
                {title: 'title 2'},
                {title: 'title 3'},
                {title: 'title 4'},
            ],
        };
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                {index == 3 && <Button onPress={() => this.props.navigation.navigate('Auth')}> Login</Button>}
            </View>
        );
    };

    render() {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;

        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Carousel
                        ref={(c) => {
                            this._carousel = c;
                        }}
                        data={this.state.entries}
                        renderItem={this._renderItem}
                        sliderWidth={windowWidth * 0.9}
                        itemWidth={windowWidth}
                    />
                </View>
            </React.Fragment>

        );
    }
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
