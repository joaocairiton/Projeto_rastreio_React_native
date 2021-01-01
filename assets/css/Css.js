import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "center",
   
    
  },
  textPage: {
    backgroundColor: "orange",
    padding: 20,
  },
  bt_login: {
    backgroundColor: "#999",
    textAlign: "center",
    marginVertical: 19,
    marginHorizontal: 16,
    width: "80%",    
  },
  darkbg:{
    backgroundColor:"#333"
},

login__logomarca:{
  marginBottom: 20,

  
},
login__msg:(text = 'none') =>({
  
  fontWeight:"bold",
    fontSize: 20,
    color:"red",
    marginBottom: 10,
    textAlign: "center",
    width: "80%",
    display: text

}),



login__form:{
  width: "80%"
},

login__input:{
  backgroundColor: "#fff",
  fontSize: 19,
  padding: 7,
  marginBottom: 15,
  borderRadius:15,
},

login__button:{
  padding: 12,
  backgroundColor: "#F58634",
  alignSelf:"center",
  borderRadius:15,
  width: "80%"
  
},
login__buttonText:{
  fontWeight:"bold",
  fontSize: 22,
  color:"#333",
  textAlign:"center"
  
}
  
});
export { css };
