import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
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
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../firebase/token';
import { initializeApp } from 'firebase/app';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Daftar = ({ navigation }) => {

    const [nama, setNama] = React.useState('');
    const [nomor, setNomor] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const usersCollectionRef = collection(db, "user");


    const createUser = async () => {
        await addDoc(usersCollectionRef, { nama: nama, nomor: nomor, email: email });
    };
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                createUser()
                const user = userCredential.user;
                console.log('Registered with:', user.email);
                // alert("Selamat akun anda telah terdaftar.")
                navigation.navigate('Succes')
            })
            .catch(error => {
                // console.log(error.code)
                switch (error.code) {
                    case "auth/email-already-in-use":
                        alert("Maaf akun dengan email tersebut telah terdaftar.")
                        break

                    // default:
                    //     alert("Autentifikasi gagal, silahkan coba lagi nanti.")
                }
            })
    }


    return (
        <ScrollView>
            <Text style={{ textAlign: 'center', marginTop: 90, fontSize: 20, fontWeight: '700' }}>Daftar</Text>
            <TextInput
                onChangeText={nama => setNama(nama)}
                value={nama}
                style={styles.box_input}
                placeholder='Nama Lengkap ...'
            />
            <TextInput
                onChangeText={email => setEmail(email)}
                value={email}
                style={styles.box_input}
                placeholder='Email ...'
            />
            <TextInput
                onChangeText={nomor => setNomor(nomor)}
                value={nomor}
                style={styles.box_input}
                placeholder='Nomor HP ...'
            />
            <TextInput
                onChangeText={password => onChangePassword(password)}
                value={password}
                style={styles.box_input}
                placeholder='Password ...'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (nama == '' || nomor == '' || email == '' || password == '') {
                        alert('Silahkan mengisi semua kolom pendaftaran.')
                    } else {
                        handleSignUp()
                    }
                }
                }
            >
                <Text style={styles.inBox}>Mendaftar</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 30
    },
    inBox: {
        color: 'white',
        fontSize: 14
    },

})

export default Daftar