import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Formik } from 'formik';

// Maybe I should tranform it into a class? by HeadMaster



function Logon(){

  function handleLoginData(usrData){
    if (validateEmail(usrData['email'])){
      if(usrData['password'] === usrData['confirm_password']){
        // Do request using axios (already installed)
        console.log(usrData)

      }else{
        // MODAL MESSAGE: Password are not equal!
        console.log("Password are not equal!")
      }
    
    }else{
      // MODAL MESSAGE: Email not valid!
      console.log("Email not valid!")
      console.log(validateEmail(usrData['email']))

    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  return(
  <Formik

    initialValues={
      { email: '',
        password: '',
        confirm_password: ''
      }
    }

    onSubmit={values => handleLoginData(values)}

  >

    {({ handleChange, handleBlur, handleSubmit, values }) => (

      <View>

        <Text style={styles.textLogon}>Email</Text>

        <TextInput  
          style={styles.input}
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />

        <Text style={styles.textLogon}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />

        <Text style={styles.textLogon}>Confirm your Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={handleChange('confirm_password')}
          onBlur={handleBlur('confirm_password')}
          value={values.confirm_password}
        />

      
        <Button onPress={handleSubmit} title="Submit" />

      </View>

    )}

  </Formik>
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
    color: '#060000'
  }
});