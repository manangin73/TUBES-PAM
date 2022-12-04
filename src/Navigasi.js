import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Daftar from './screens/daftar';
import Detail from './screens/detail';
const Stack = createNativeStackNavigator();
export default function Navigasi() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
                <Stack.Screen name="Daftar" component={Daftar} />
                <Stack.Screen name="Detail Restoran" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}