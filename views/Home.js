import React from "react";
import { Text, View, Button,TouchableOpacity, SafeAreaView } from "react-native";
import { css } from "../assets/css/Css";
import { AntDesign, Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={css.container_home}>

      <View style={css.bt_lg_home}>
        <TouchableOpacity style={css.login__button} onPress={() => navigation.navigate('Login')}>
                <Text style={css.login__buttonText}>Login</Text>
                <Icon name="users" size={30} color="black" />
            </TouchableOpacity>
      </View>

      
      <View style={css.bt_lg_home}>
        <TouchableOpacity style={css.login__button} onPress={() => navigation.navigate('Rastreio')} >
                <Text style={css.login__buttonText}>Rastreio</Text>
                <Entypo name="location" size={30} color="black"  />
            </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
}
