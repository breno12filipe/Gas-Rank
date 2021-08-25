import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

/*
  NOTE: Aqui estou fazendo um formulário para submissão de login utilizando formik para
  controle do formulário e yup para validação dos campos (stack recomendada pela 
  própria documentação do formik), o esquema de validação está contido na função 
  SignUpValidation que por sua vez cria um objeto do tipo 'Yup' contendo as regras 
  de validação. by HeadMaster 

  REF: https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/
*/

/*
  TODO: Há alguns problemas no código abaixo...
    ->  Transformar a função logon em uma classe [✓] 
    ->  A validação de passwordConfirmation não está acontecendo 
    ->  Existe não exclusividade nos seguintes nomes: email, password e confirm_password
        isso pode deixar brechas para que alguns bugs ocorram...
    ->  Acredito que seria melhor trocar o nome de 'Logon' para 'signUp', acredito que 
        logon não seja o melhor termo para a esta funcionalidade
*/

const SignUpValidation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Please Enter your password').matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})


class Logon extends Component{

  render(){
    return (
      <Formik

        initialValues={
          { email: '',
            password: '',
            confirm_password: ''
          }
        }

        validationSchema={SignUpValidation}

        onSubmit={values => {console.log(values);}}
        
      >


        {({errors, touched, handleChange, handleBlur, handleSubmit, values}) =>  (

          <View>

            <Text style={styles.textLogon}>Email</Text>

            <TextInput  
              name="email"
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {/* if something goes wrong with the email validation throws an message. by HeadMaster */}
            {errors.email && <Text style={styles.error_msg}> {errors.email} </Text>}
            

            <Text style={styles.textLogon}>Password</Text>
            <TextInput
              name="password"
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              />
            {/* {errors.password && <Text style={styles.error_msg}> {errors.password} </Text>} */}

            <Text style={styles.textLogon}>Confirm your Password</Text>
            <TextInput
              name="confirm_password"
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={handleChange('confirm_password')}
              onBlur={handleBlur('confirm_password')}
              value={values.confirm_password}
            />
            {errors.passwordConfirmation && <Text style={styles.error_msg}> {errors.passwordConfirmation} </Text>}
            
          
            <Button onPress={handleSubmit} title="Submit" />

          </View>

        )}

      </Formik>
    )
  }
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
  },
  error_msg:{
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ff0000'
  }
});