import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Home from './components/Home';

import {DrawerContent} from './navigation/DrawerContent';
import Blank from './pages/Blank';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext, AuthProvider} from './AuthContext';
import WelcomeScreen from './pages/public/WelcomeScreen';
import AuthScreen from './pages/public/AuthScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Route() {
    const {currentUser} = useContext(AuthContext);


    //
    // const drawer = () => {
    //     return <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  >
    //         <Drawer.Screen name={'Home'} component={Blank}/>
    //         <Drawer.Screen name={'Contracts'} component={Blank} />
    //         <Drawer.Screen name={'Messages'} component={Blank}/>
    //         <Drawer.Screen name={'Support'} component={Blank}/>
    //         <Drawer.Screen name={'CounterParties'} component={Blank}/>
    //         <Drawer.Screen name={'ContractingCompanies'} component={Blank}/>
    //         <Drawer.Screen name={'Settings'} component={Blank}/>
    //     </Drawer.Navigator>
    // }


    return (
        <React.Fragment>
            {!currentUser && <NavigationContainer>
                <Stack.Navigator initialRouteName={'Welcome'} headerMode={'none'}>
                    <Stack.Screen name={'Welcome'} component={WelcomeScreen}/>
                    <Stack.Screen name={'Auth'} component={AuthScreen}/>
                </Stack.Navigator>
            </NavigationContainer>}
            {currentUser && <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name={'Home'} component={Blank}/>
                    <Drawer.Screen name={'Sales'} component={Blank}/>
                    <Drawer.Screen name={'Purchases'} component={Blank}/>
                    <Drawer.Screen name={'Expenses'} component={Blank}/>
                    <Drawer.Screen name={'Stock'} component={Blank}/>
                    <Drawer.Screen name={'Report'} component={Blank}/>
                    <Drawer.Screen name={'Subscription'} component={Blank}/>
                    <Drawer.Screen name={'Businesses'} component={Blank}/>
                    <Drawer.Screen name={'RoleManagement'} component={Blank}/>
                    <Drawer.Screen name={'Support'} component={Blank}/>
                    <Drawer.Screen name={'messages'} component={Blank}/>
                    <Drawer.Screen name={'Settings'} component={Blank}/>
                </Drawer.Navigator>
            </NavigationContainer>}

        </React.Fragment>);


}


