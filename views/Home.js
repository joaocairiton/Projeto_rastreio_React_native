import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { css } from "../assets/css/Css";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={css.container}>
      <View style={css.bt_login}>
        <Button
          title="login"
          onPress={() =>
            navigation.navigate("Login", {
              id: 30,
            })
          }
        />
      </View>

      <View style={css.bt_login}>
        <Button 
          title="Rastreio"
          onPress={() =>
            navigation.navigate("Login", {
              id: 30,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}
