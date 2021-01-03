import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: "center",
    justifyContent: "center",  
  },
  container_home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },
  containerTop: {

    justifyContent: 'flex-start'

  },


  
  textPage: {
    backgroundColor: "orange",
    padding: 20,
  },

  bt_lg_home:{
    padding: 12,
    backgroundColor: "#F58634",
    alignSelf:"center",
    borderRadius:15,
    width: "80%",
    marginBottom: 30,

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
  
}, 
area__tab:{

  backgroundColor: "#333",
  fontSize: 20,
  fontWeight:"bold",
  color:"#333"
},
area__menu:{
  flexDirection: 'row',
  paddingTop: 40,
  paddingBottom: 10,
  width: '100%',
  backgroundColor:'#111',
  alignItems:'center',
  justifyContent:'center'
},
button__home2:{
  textAlign:'left'
},
area__title:{
  width: '80%',
  fontWeight:'bold',
  fontSize:20,
  color:'#fff',
  textAlign:'center'
},
button__logout:{
  textAlign:'right'
}
  
});
export { css };
