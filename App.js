import { useState } from "react";
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
const App = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = ()=>
  {
    Alert.alert(`Dang nhap thanh cong voi user name = ${email}va password = ${password}` );
  }
  return(
    <ImageBackground
    source ={require("./assets/bg.png")}
    style ={{width: '100%', height: '100%'}}
    resize
    >

    <View style={mystyle.container}>
      
          
          <Image
              
              style ={{width: 100, height: 100, alignSelf:"center"}}
              source={require("./assets/logo.png")}
              resize
          ></Image>
          <TextInput
            style={mystyle.textInput}
            onChangeText={setEmail}
            
            placeholderTextColor="#14dce3"
            placeholder="Username"
            value={email}
            />
          <TextInput
            style={mystyle.textInput}
            onChangeText={setPassword}
            placeholderTextColor="#14dce3"
            placeholder="Password"
            secureTextEntry
            value={password}
            />
          <TouchableHighlight
            style={mystyle.button}
            onPress={onPress}
          >
            <Text style={mystyle.buttonText}>
                Login
            </Text>
          </TouchableHighlight>
    </View>
    </ImageBackground>
  )
}

export default App;
const mystyle = StyleSheet.create(
  {
    container: {
      flex:1,
      padding: 10,
      justifyContent:"center"
      
    },
    textInput: {

      padding:10,
      borderWidth:1,
      color: "white",
      borderColor: "#d214e3",
      fontSize: 18,
      margin:15
    },
    button: {
      backgroundColor: "aqua",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 5
    },
    buttonText: {
      color: "#d214e3",
      fontSize: 20,
      fontweight: "bold"
    }
  }
)