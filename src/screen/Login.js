import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { db } from '../firebase/crudConf';
import {
    collection,
    // getDocs,
    addDoc,
    // updateDoc,
    // deleteDoc,
    // doc,
} from "firebase/firestore"
import { firebaseConfig } from '../firebase/token';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
const Login = ({ navigation }) => {
    const [nama, setNama] = React.useState('');
    const [nomor, setNomor] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const app = initializeApp(firebaseConfig);


    const auth = getAuth(app);
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log('Signed In!')
                alert('Selamat anda berhasil Login!')
                const user = userCredential.user
                // console.log(user)
                navigation.navigate('Beranda')
            })
            .catch(error => {
                // console.log(error.code)
                switch (error.code) {
                    case "auth/invalid-email":
                        alert("Maaf format email yang anda masukkan salah.")
                        break
                    case "auth/user-not-found":
                        alert("Maaf pengguna tidak ditemukan.")
                        break
                    case "auth/wrong-password":
                        alert("Kata sandi yang anda masukkan salah.")
                        break
                    // default:
                    //     alert("Autentifikasi gagal, silahkan coba lagi nanti.")
                }
            })
    }

    return (
        <ScrollView>

            <Image
                style={styles.tinyLogo}
                source={require("../assets/image11.png")}
            />
            {/* <Image style={styles.tinyLogo} source={require("../assets/image11.png")} /> */}

            <TextInput
                onChangeText={email => setEmail(email)}
                value={email}
                style={styles.box_input}
                placeholder='Email ...'
            />
            <TextInput
                onChangeText={password => onChangePassword(password)}
                value={password}
                style={styles.box_input}
                placeholder='Password ...'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignIn}
            >
                <Text style={styles.inBox}>Masuk</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Login

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
        fontSize: 14,
        textAlign: 'center'
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
    },
    box_input: {
        borderWidth: 1,
        borderRadius: 10,
        // width: '100%',
        padding: 10,
        borderColor: '#D7DBDD',
        paddingLeft: 38,
        fontFamily: 'poppins',
        marginHorizontal: 10,
        marginTop: 20,
        padding: 15
    },
    button: {
        padding: 10,
        backgroundColor: '#3498DB',
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 30,
        alignItems: 'center'
    },
    inBox: {
        color: 'white',
        fontSize: 14
    },

})