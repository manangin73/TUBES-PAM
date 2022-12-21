import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Succes = ({ navigation }) => {
    return (
        <ScrollView>

            <Image
                style={styles.tinyLogo}
                source={require("../assets/image11.png")}
            />
            {/* <Image style={styles.tinyLogo} source={require("../assets/image11.png")} /> */}
            <View style={styles.title}>
                <Text style={styles.teks}>Selamat!
                </Text>
                <Text style={styles.teks}>Anda sudah berhasil mendaftar</Text>

            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigation.navigate('Login') }}
            >
                <Text style={styles.inBox}>Lanjutkan</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Succes

const styles = StyleSheet.create({
    tinyLogo: {
        width: 289,
        height: 276,
        alignSelf: 'center',
        resizeMode: 'stretch',
        marginTop: 30
    },
    title: {
        alignSelf: 'center',
        marginTop: 20,
        textAlign: 'center',
    },
    teks: {
        fontSize: 18,
        fontWeight: '700'
    },
    inBox: {
        color: 'white',
        fontSize: 14
    },
    inBox2: {
        color: '3498DB',
        fontSize: 14
    },
    button: {
        padding: 10,
        backgroundColor: '#3498DB',
        textAlign: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 30
    },
    button2: {
        padding: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        borderColor: '#3498DB',
        borderWidth: 1,
        marginTop: 10
    }

})