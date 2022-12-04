import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'


const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{}}>
        <View style={{
          backgroundColor: 'green',
          paddingVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 12,
        }}>
          <Text style={{ color: 'white', fontFamily: 'Cascadia', fontSize: 20, paddingTop: 20 }}>
            Makan yuk
          </Text>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../../images/makan.jpg")}
            style={{}}
            resizeMode='cover'
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Daftar') }}
          style={{
            backgroundColor: "green",
            paddingVertical: 20,
            justifyContent: "center",
            alignItems: 'center',
            marginTop: 100,
            marginHorizontal: 20,
            borderRadius: 50,
            elevation: 3,

          }}
        >
          <Text style={{ color: "white" }}>Silahkan masuk</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export default Home;