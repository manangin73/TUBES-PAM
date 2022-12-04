import { ScrollView, View, StyleSheet, TouchableOpacity,Image, Text } from 'react-native'
import React from 'react'

const Daftar = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.row}>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Detail Restoran', {
                            link: require("../../images/funchicken.jpeg"),
                            judul: 'Ayam geprek adalah ayam yang di geprek'
                        })
                    }}
                >
                    <Image source={require('../../images/funchicken.jpeg')} style={styles.ikon} />
                    <Text style={styles.teks} >Ayam geprek</Text>
                </TouchableOpacity>
            </View>
<View style={styles.row}>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Detail Restoran', {
                            link:require("../../images/miegacoan1.jpeg"),
                            judul: 'Mie Gacoan merupakan mie'
                        })
                    }}
                >
                    <Image source={require('../../images/miegacoan1.jpeg')} style={styles.ikon} />
                    <Text style={styles.teks} >Mie Gacoan</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Detail Restoran', {
                            link:require("../../images/bakso1.jpeg"),
                            judul: 'Bakso Gede adalah restoran dimana makanannya menjual banyak bakso'
                        })
                    }}
                >
                    <Image source={require('../../images/bakso1.jpeg')} style={styles.ikon} />
                    <Text style={styles.teks} >Bakso</Text>
                </TouchableOpacity>
            </View>
                        <View style={styles.row}>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {
                        navigation.navigate('Detail Restoran', {
                            link: require("../../images/sederhana.jpeg"),
                            judul: 'Mie Ayam adalah mie yang di campuri dengan potongan daging ayam'
                        })
                    }}
                >
                    <Image source={require('../../images/sederhana.jpeg')} style={styles.ikon} />
                    <Text style={styles.teks} >Mie Ayam</Text>
                </TouchableOpacity>
            </View>
    </ScrollView>
  )
}

export default Daftar
const styles=StyleSheet.create({
    menu: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        width: 200,
        margin: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    ikon: {
        width: 180,
        height: 170,
        borderRadius: 20,
    },
})