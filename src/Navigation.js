import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screen/Landing';
import Daftar from './screen/Daftar';
import Succes from './screen/Succes';
import Login from './screen/Login';
import Beranda from './screen/Beranda';
import Detail from './screen/Detail';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Landing'>
                <Stack.Screen options={{ headerShown: false }} name="Landing" component={Landing} />
                <Stack.Screen options={{ headerShown: false }} name="Daftar" component={Daftar} />
                <Stack.Screen options={{ headerShown: false }} name="Succes" component={Succes} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Beranda" component={Beranda} />
                <Stack.Screen options={{ headerShown: false }} name="Detail" component={Detail} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation