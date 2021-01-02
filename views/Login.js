import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image, Text, View} from 'react-native';
import { css } from "../assets/css/Css";

export default function Login({route})
{

  const [display, setDisplay] = useState('none');
  const [user, setUser]=useState(null);
  const [password, setPassword]=useState(null);
  const [login, setLogin]=useState(null);

  //Envio do formulário de login
  async function sendForm()
  {
      let response=await fetch('http://192.168.15.9:3000/login',{
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: user,
              password: password
          })
      });
      let json=await response.json();
      if(json === 'error'){
          setDisplay('flex');
          setTimeout(()=>{
              setDisplay('none');
          },5000);
      }
  }


  
    return(
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
      <View  style={css.login__logomarca}>
      <Image source={require('../assets/img/icon.png')} /> 
       
      </View>

      <View>
      <Text style={css.login__msg(display)}>Usuário ou senha Inválidos!</Text>
      </View>

      <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setUser(text)} />
                <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>


     </KeyboardAvoidingView>
    );
}