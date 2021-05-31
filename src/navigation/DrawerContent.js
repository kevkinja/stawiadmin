import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer, Paragraph,
} from 'react-native-paper';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../AuthContext';
import {GoogleSignin} from '@react-native-community/google-signin';
import {themeColors} from '../utilities/Defaults';

export function DrawerContent(props) {
    const {currentUser, setCurrentUser} = useContext(AuthContext);
    const nav = props.navigation.navigate;

    return (
        <View style={{flex: 1, padding: 0, margin: 0}}>
            <DrawerContentScrollView  {...props} >
                <View style={styles.drawerContent}>
                    <View style={[styles.userInfoSection, {backgroundColor: themeColors.primary}]}>
                        <View style={styles.userAvatar}>
                            <Avatar.Image
                                source={{uri: currentUser.photo ? currentUser.photo : 'https://picsum.photos/100/100'}}
                                size={60}/>
                            <View style={styles.userDetails}>
                                <Title
                                    style={styles.title}>{currentUser.name ? currentUser.name : 'John Doe Maina'}</Title>
                                <Caption
                                    style={styles.caption}>{currentUser.email ? currentUser.email : 'name@google.com'}</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.section]}>
                                <Paragraph style={[styles.paragraph, styles.caption, {color: themeColors.whiteText}]}>10K
                                    /=</Paragraph>
                                <Caption style={[styles.caption, {color: themeColors.whiteText}]}>Sales</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption, {color: themeColors.secondary}]}>1K
                                    /=</Paragraph>
                                <Caption style={[styles.caption, {color: themeColors.secondary}]}>Expenses </Caption>
                            </View>
                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>

                        <DrawerItem onPress={() => nav('Home')} label={'Dashboard'}
                                    icon={({color, size}) => (<Icon name={'dashboard'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Sales')} label={'Sales'}
                                    icon={({color, size}) => (
                                        <Icon name={'shoppingcart'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Purchases')} label={'Purchases'}
                                    icon={({color, size}) => (<Icon name={'dashboard'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Expenses')} label={'Expenses'}
                                    icon={({color, size}) => (<Icon name={'leftsquare'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Stock')} label={'Stock'}
                                    icon={({color, size}) => (<Icon name={'folder1'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Report')} label={'Report'}
                                    icon={({color, size}) => (<Icon name={'barschart'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Subscription')} label={'Subscription'}
                                    icon={({color, size}) => (<Icon name={'creditcard'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Businesses')} label={'Businesses'}
                                    icon={({color, size}) => (<Icon name={'appstore-o'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('RoleManagement')} label={'Role Management'}
                                    icon={({color, size}) => (<Icon name={'Safety'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Support')} label={'Support'}
                                    icon={({color, size}) => (<Icon name={'infocirlceo'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Messages')} label={'Messages'}
                                    icon={({color, size}) => (<Icon name={'message1'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Notifications')} label={'Notifications'}
                                    icon={({color, size}) => (<Icon name={'bells'} color={color} size={size}/>)}/>
                        <DrawerItem onPress={() => nav('Settings')} label={'Settings'}
                                    icon={({color, size}) => (<Icon name={'setting'} color={color} size={size}/>)}/>

                    </Drawer.Section>
                </View>


            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (<Icon name={'logout'} color={color} size={size}/>)}
                    onPress={() => setCurrentUser(false)}
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
        marginVertical: 0,
        paddingVertical: 0,
    },
    userInfoSection: {
        paddingLeft: 20,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1,
        marginTop: 0,
        paddingBottom: 10,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: '#eeeeee',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white',
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
        marginTop: 40,
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },


});
