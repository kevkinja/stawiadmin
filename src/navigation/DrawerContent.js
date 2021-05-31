import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

// import auth from '@react-native-firebase/auth';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Text,
    TouchableRipple,
    Switch,
    Drawer,
} from 'react-native-paper';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../AuthContext';
import {GoogleSignin} from '@react-native-community/google-signin';

export function DrawerContent(props) {
    const {currentUser, setCurrentUser} = useContext(AuthContext);
    const nav = props.navigation.navigate;

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView  {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userAvatar}>
                            <Avatar.Image
                                source={{uri: currentUser.photo ? currentUser.photo : 'https://picsum.photos/100/100'}}
                                size={60}/>
                            <View style={styles.userDetails}>
                                <Title
                                    style={styles.title}>{currentUser.name ? currentUser.name : 'No Name'}</Title>
                                <Caption style={styles.caption}>{currentUser.email}</Caption>
                            </View>
                        </View>
                        {/*<View style={styles.row}>*/}
                        {/*    <View style={styles.section}>*/}
                        {/*        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>*/}
                        {/*        <Caption style={[styles.caption]}>Overdue</Caption>*/}
                        {/*    </View>*/}
                        {/*    <View style={styles.section}>*/}
                        {/*        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>*/}
                        {/*        <Caption style={[styles.caption]}>Due</Caption>*/}
                        {/*    </View>*/}
                        {/*</View>*/}

                    </View>
                    <Drawer.Section style={styles.drawerSection}>

                        <DrawerItem onPress={() => nav('Home')} label={'Home'}
                                    icon={({color, size}) => (<Icon name={'home'} color={color} size={size}/>)}/>


                        <DrawerItem onPress={() => nav('Support')} label={'Support'}
                                    icon={({color, size}) => (<Icon name={'info-circle'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Settings')} label={'Settings'}
                                    icon={({color, size}) => (<Icon name={'setting'} color={color} size={size}/>)}/>

                    </Drawer.Section>
                </View>


            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (<Icon name={'logout'} color={color} size={size}/>)}
                    onPress={() => {
                        // if (auth().currentUser) {
                        //     auth().signOut();
                        // }
                        // if (GoogleSignin.isSignedIn()) {
                        //     GoogleSignin.signOut();
                        // }
                        // setCurrentUser(false);
                    }}
                    label={'Sign Out'}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    userAvatar: {
        flexDirection: 'row', marginTop: 15,

    },
    userDetails: {marginLeft: 15, flexDirection: 'column'},
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginTop: 100,
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },


});
