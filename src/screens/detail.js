import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, Platform, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

export default function Detail({ route, navigation }) {
    const { link, judul } = route.params
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };


    }, []);
    return (
        <View style={styles.container}>
            <Image
        
        source={link}
      />
            <Text>
                {judul}
            </Text>
            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Maps' : 'Maps'}
                    onPress={
                        async () => {
                            await schedulePushNotification(judul);
                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        }

                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    image: {
        width: '100%'
    },
});

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});





async function schedulePushNotification(judul) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Anda membuka restoran..",
            body: judul,
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2 },
    });
}

async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Silahkan di baca dengan baik');
    }

    return token;
}
