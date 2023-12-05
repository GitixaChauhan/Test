/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'
import {
  
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


function App(): JSX.Element {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [display,setDisplay]=useState(false)

  function resetFormData() {
    
   setDisplay(false);
   setName("");
   setEmail("");
   setPassword("");
    }

 return (
  <ScrollView>
  <View> 
    <Text style={{fontSize: 30, marginTop:20, backgroundColor:'lightblue', borderRadius:20}}> Handle Text Input</Text>
    <Text style={{fontSize:20, marginTop:80}}> Username:</Text>
    <TextInput
    style={styles.textInput}
    placeholder='Enter Your Name'
    onChangeText={(text)=>setName(text)}
    value={name}
    />
    <Text style={{fontSize: 20}}> Email:</Text>
    <TextInput
    style={styles.textInput}
    placeholder='Enter Your Email'
    onChangeText={(text)=>setEmail(text)}
    value={email}
    />

<Text style={{fontSize: 20}}> Password:</Text>
    <TextInput
    style={styles.textInput}
    placeholder='Enter Your Password'
    secureTextEntry={true}
    onChangeText={(text)=>setPassword(text)}
    value={password}
    />
    <Button title='Login' onPress={()=>setDisplay(true)}></Button>
    <Text style={{fontSize:22, marginTop:10}}>Already Have an account:
    <Button title='SignUp?' onPress={resetFormData} ></Button>
    </Text>

    <View>
  {
      display?
      <View>
        <Text style={{fontSize:20}}> User Name is: {name}</Text>
        <Text style={{fontSize:20}}> User Email is: {email}</Text>
         <Text style={{fontSize:20}}> User Password is: {password}</Text>

      </View> : null
  }

    </View>
  </View>
  </ScrollView>
  );
  }

  const styles = StyleSheet.create({
    textInput:{
      fontSize:18,
       color:'black', 
       borderWidth:2, 
       borderColor:'blue',
       margin:10, 
       height:50,
       borderRadius:10,
       
      
    }
  })

export default App;
