import React, { useState, Component } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import { validateEmail, validatePassword} from './components/Validations' ;
import { Formik } from 'formik';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardNavigation from './pages/Dashboard'
import Logon from './pages/CreateAccount'



// TODO: Fix the navigate, problem is, we have two withFormik one in CreateAccount
// and on this index.js, maybe we should change the name, or either place the
// 'withFormik' inside a function and export it, but this can cause another problems
// due to the formik template I've followed. by HeadMaster

// TODO: Better way to to this is using redux

//class Login extends Component {
const Login = (props) => {
    const navigation = useNavigation() 
    var state = {
      email: '',
      password: '',
    }
    return (
      <Formik>
        <SafeAreaView style={styles.container}>
          <Image style= {styles.image}
            source={require('../assets/Gasrank.png')}
          />
          <View>
            <Text style={styles.textLogin}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
            />
            <Button
              style={styles.login_btn}
              title="Login"
              onPress={() => navigation.navigate('Dashboard', {screen: 'Mapa', initial: true})}
              
            />
            <Text style={styles.textLogon}>Doesn't have an account?</Text>
            <Button
              onPress={() => navigation.navigate('Logon')}
              style={styles.logon_btn}
              title="Create an account"
            />
          </View>
        </SafeAreaView>
      </Formik>
    )
}

const Stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logon" component={Logon} />
        <Stack.Screen name="Dashboard" component={DashboardNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// Basically we got to call the function below to auth user
// REF: https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

function handleLogin(event){
  usrEml = values["email"].trim()
  usrPsw = values["password"].trim()    

  if (validateEmail(usrEml) && validatePassword(usrPsw)){
    fetch('http://192.168.0.107:3000/usrLogin', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            eml: usrEml,
            psw: usrPsw
        }).then((response) => response)
          .then(data => console.log(data))
    })
  }
}

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
    },
    image: {
      marginBottom: 60
    }

});
