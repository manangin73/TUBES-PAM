import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'
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

const Beranda = ({ navigation, route }) => {
    const [resto, setResto] = useState([]);
    const [data_proses, setdata_proses] = useState();
    const restoCollectionRef = collection(db, "resto");
    const [text, setText] = useState('');
    const [filter, setFilter] = useState(false)
    // var data_proses = null
    const app = initializeApp(firebaseConfig);
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const searchFilterFunction = (text) => {
        if (text != '') {

            setMasterDataSource(data_proses)
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.nama
                    ? item.nama.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);

            setSearch(text);
        } else {
            setFilteredDataSource(data_proses);
            setSearch(text);
        }
    };
    const auth = getAuth(app);
    const getResto = async () => {
        const data = await getDocs(restoCollectionRef);
        setResto(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setdata_proses(resto)
    };
    const signOutUser = async () => {
        try {
            await auth.signOut();
            navigation.navigate('Login');
        } catch (e) {
            console.log(e);
        }
    }

    useFocusEffect(
        React.useCallback(() => {

            getResto();
            // var data_proses = resto
        }, [])
    );
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Restaurant Apps</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { signOutUser() }}
                >
                    <Text style={{ color: 'white' }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                style={styles.box_input}
                placeholder='Search ...'
            />

            {/* <TouchableOpacity style={styles.list}>
                <Text>Mie Gacoan</Text>
                <Text>Jakarta</Text>
                <Text>Rating: 4.7</Text>
            </TouchableOpacity> */}
            {
                search == '' && (
                    <FlatList
                        data={resto}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.list}
                                onPress={() => {
                                    navigation.navigate('Detail', {
                                        nama: item.nama,
                                        lokasi: item.lokasi,
                                        deskripsi: item.deskripsi,
                                        gambar: item.gambar,
                                        rating: item.rating
                                    })
                                }}
                            >
                                <View style={{ display: 'flex', flexDirection: 'row', }}>
                                    <Image
                                        style={styles.icon}
                                        source={{ uri: item.gambar }}
                                    />
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.nama}</Text>
                                        <Text>{item.lokasi}</Text>
                                        <Text>{item.rating}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                )}

            {
                search != '' && (
                    <FlatList
                        data={filteredDataSource}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.list}
                                onPress={() => {
                                    navigation.navigate('Detail', {
                                        nama: item.nama,
                                        lokasi: item.lokasi,
                                        deskripsi: item.deskripsi,
                                        gambar: item.gambar,
                                        rating: item.rating
                                    })
                                }}
                            >
                                <View style={{ display: 'flex', flexDirection: 'row', }}>
                                    <Image
                                        style={styles.icon}
                                        source={{ uri: item.gambar }}
                                    />
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.nama}</Text>
                                        <Text>{item.lokasi}</Text>
                                        <Text>{item.rating}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                )}
        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        paddingVertical: 40
    },
    list: {
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginTop: 10
    },
    button: {
        padding: 10,
        backgroundColor: '#3498DB',
        textAlign: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    box_input: {
        borderWidth: 1,
        borderRadius: 10,
        // width: '100%',
        padding: 10,
        borderColor: '#D7DBDD',
        paddingLeft: 38,
        marginHorizontal: 10,
        marginTop: 20,
        padding: 15
    },
    icon: {
        width: 60,
        height: 60,
        borderRadius: 6,
        marginRight: 10
    }
})