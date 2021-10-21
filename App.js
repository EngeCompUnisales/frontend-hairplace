import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { withFormik } from 'formik';

import api from './src/services/api'

const Form = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Login"
      value={props.values.login}
      onChangeText={text => props.setFieldValue('login', text)}
    />
    <TextInput
      secureTextEntry={true}
      style={styles.password}
      placeholder="Senha"
      value={props.values.password}
      onChangeText={text => props.setFieldValue('password', text)}
    />
    <Button
      onPress={props.handleSubmit}
      title="Entrar"
    />
  </View>
);
const styles = StyleSheet.create({
  input: {
    width: '50%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  password: {
    width: '50%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default withFormik({
  mapPropsToValues: () => ({ login: '', password: '' }),
  handleSubmit: (values) => {
  
    api.get(`/api/v1/login/${values.login}`)
    .then(res => {
      console.log(res.data);
    })  
  }
})(Form);
