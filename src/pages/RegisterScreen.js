// RegisterScreen.js

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Registration logic goes here
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <View>
            <TextInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Text style={styles.errorText}>{errors.email}</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Text style={styles.errorText}>{errors.password}</Text>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
            />
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            <Button title="Register" onPress={handleSubmit} />
            <Text>
              Already have an account?{' '}
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate('Login')}
              >
                Login
              </Text>
            </Text>
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
  linkText: {
    color: 'blue',
  },
});

export default RegisterScreen;
