import React from "react";
import { View, Text } from "react-native";
import { css } from "../assets/css/Css";

export default function Page(props) {
  return (
    <View>
      <Text style={css.textPage}>
        O nome da empresa é {props.empresa} e seu desenvolvedor é {props.name}.
        Comprou o produto {props.produto} na seguinte quantidade {"  "}
        {props.quantidade}
      </Text>
    </View>
  );
}
