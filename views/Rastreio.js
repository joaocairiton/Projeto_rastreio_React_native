import React from 'react';
import {Text, View, Button} from 'react-native';


export default function Rastreio({route})
{
    return(
      <View>
          <Text>Esse é o componente Rastreio do sistema {route.params.id}</Text>
      </View>
    );
}