import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';

function Logon(){
  return(
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.textLogin}>Crie sua conta</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password confirmation"
      />

      <Button
        style={styles.logon_btn}
        title="Create an account"
      />
    </View>
  </SafeAreaView>
  )
}
export default Logon;

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#111121',
  },
  map:{
      width: '100%',
      height: '95%',
      marginBottom: 100
  },
  input:{
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 45,
      fontSize: 14,
      borderRadius: 7,
      padding: 10,
      marginBottom: 25
  },
  textLogin:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#00acee',
  },
  login_btn:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#00acee',
      borderRadius: 7
  },
  textLogon: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF'
  }
});