import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore"
import { db } from '../firebase/crudConf';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../firebase/token';
import { initializeApp } from 'firebase/app';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Detail = ({ navigation, route }) => {
    const [makanan, setMakanan] = useState([]);
    const makananCollectionRef = collection(db, "makanan");
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const { nama, lokasi, deskripsi, gambar, rating } = route.params;
    const getMakanan = async () => {
        const data = await getDocs(makananCollectionRef);
        setMakanan(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    var resto = nama;
    useFocusEffect(
        React.useCallback(() => {

            getMakanan();
        }, [])
    );
    // console.log(makanan)
    return (
        <ScrollView style={{ padding: 10 }}>
            <View style={{ display: 'flex', flexDirection: 'row', margin: 40 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Text style={{ fontSize: 30, marginTop: -5, marginRight: 30 }}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.teks}>{nama}</Text>
            </View>
            <Image
                style={styles.tinyLogo}
                source={{ uri: gambar }}
            />

            <Text style={styles.normal}>Deskripsi {'\n \n'}{deskripsi}</Text>
            <Text style={styles.normal}>Lokasi: {lokasi}</Text>
            <Text style={styles.normal}>Rating: {rating}</Text>

            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Menu Makanan</Text>
            <FlatList
                nestedScrollEnabled
                horizontal
                data={makanan}
                renderItem={({ item }) => (
                    <>
                        {item.resto == resto && (
                            <View style={styles.list}
                            >
                                <Text>{item.nama}</Text>
                                <Image
                                    style={styles.makanan}
                                    source={{ uri: item.gambar }}
                                />
                            </View>
                        )}
                    </>


                )}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({
    tinyLogo: {
        width: 289,
        height: 276,
        alignSelf: 'center',
        resizeMode: 'stretch',
        marginTop: 30,
        borderRadius: 10
    },
    normal: {
        marginVertical: 10
    },
    title: {
        alignSelf: 'center',
        marginTop: 20,
        textAlign: 'center',
    },
    teks: {
        fontSize: 24,
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
    },
    icon: {
        width: 20,
        height: 20,
        marginTop: 8,
        marginRight: 10,

    },
    makanan: {
        width: 80,
        height: 76,
        resizeMode: 'stretch',
        marginTop: 30,
        borderRadius: 10
    },
    list: {
        marginHorizontal: 10
    }

})