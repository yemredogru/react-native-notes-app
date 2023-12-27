// LoginScreen.js

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().min(6).required(),
  password: yup.string().min(6).required(),
});

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (values) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const accessToken = data.token;
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <View>
            <TextInput
              placeholder="Username"
              value={values.username}
              onChangeText={handleChange('username')}
            />
            <Text style={styles.errorText}>{errors.email}</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Text style={styles.errorText}>{errors.password}</Text>
            <Button title="Login" onPress={handleSubmit} />
            <Text onPress={()=>navigation.navigate('Register')}>Dont have an account ?</Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});

export default LoginScreen;
