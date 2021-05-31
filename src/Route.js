import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './components/Home';

import {DrawerContent} from './navigation/DrawerContent';
import Blank from './pages/Blank';
import {AuthContext} from './AuthContext';
import Auth from './public/AuthScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


const Drawer = createDrawerNavigator();
const BTabs = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const TTabs = createMaterialTopTabNavigator();
export default function Route() {
    // const currentUser = useContext(AuthContext)
    // if (!currentUser.currentUser) return <Auth/>
    const ContractScreensStack = () => {
        return (<Stack.Navigator initialRouteName={'Contracts'} headerMode={'none'}>
            <Stack.Screen name={'Contracts'} component={Blank}/>
            <Stack.Screen name={'ContractForm'} component={Blank}/>
            <Stack.Screen name={'ContractDetails'} component={Blank}/>
        </Stack.Navigator>);
    };
    const ContractTabs = () => {
        return (
            <TTabs.Navigator>
                <TTabs.Screen
                    name={'Active'}
                    children={ContractScreensStack}/>
                <TTabs.Screen
                    name={'Executing'}
                    children={ContractScreensStack}/>
                <TTabs.Screen
                    name={'Verifying'}
                    children={ContractScreensStack}/>
            </TTabs.Navigator>
        );
    };
    const HomeTabs = (navigation) => {
        return (
            <BTabs.Navigator>
                <BTabs.Screen
                    name={'HomeTab'}
                    component={ContractScreensStack}
                    options={{
                        tabBarLabel: 'DASHBOARD',
                        tabBarIcon: ({size, color, focused}) =>
                            (<Icon name={'home'} size={20}
                                   color={color}/>),
                    }}
                />
                <BTabs.Screen
                    name={'Contracts'}
                    // children={ContractTabs}
                    component={ContractScreensStack}
                    options={{
                        tabBarLabel: 'CONTRACTS',
                        tabBarIcon: ({size, color, focused}) =>
                            (<Icon name={'inbox'}
                                   size={20}
                                   color={color}/>),
                    }}
                />
                <BTabs.Screen
                    name={'Info'}
                    component={Blank}
                    options={{
                        tabBarLabel: 'NOTIFICATIONS',
                        tabBarIcon: ({size, color, focused}) =>
                            (<Icon name={'bells'} size={20}
                                   color={color}/>),
                    }}
                />
            </BTabs.Navigator>
        );
    };
    const settingsTabs = () => {
        return (
            <BTabs.Navigator>
                <BTabs.Screen
                    name={'info'}
                    component={Blank}
                    options={{
                        tabBarLabel: 'Info',
                        tabBarIcon: ({size, color, focused}) =>
                            (<Icon name={'infocirlce'} size={20}
                                   color={color}/>),

                    }}
                />
                <BTabs.Screen
                    name={'security'}
                    component={Blank}
                    options={{
                        tabBarLabel: 'Security',
                        tabBarIcon: ({size, color, focused}) =>
                            (<Icon name={'lock'}
                                   size={20}
                                   color={color}/>),
                    }}
                />
            </BTabs.Navigator>
        );
    };
    return (<NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name={'Home'} children={HomeTabs}/>
            <Drawer.Screen name={'Contracts'} component={Blank} />
            <Drawer.Screen name={'Messages'} component={Blank}/>
            <Drawer.Screen name={'Support'} component={Blank}/>
            <Drawer.Screen name={'CounterParties'} component={Blank}/>
            <Drawer.Screen name={'ContractingCompanies'} component={Blank}/>
            <Drawer.Screen name={'Settings'} children={settingsTabs}/>
        </Drawer.Navigator>
    </NavigationContainer>);
}


