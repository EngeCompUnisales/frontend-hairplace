import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { withFormik } from 'formik';

const Form = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="E-Mail"
      value={props.values.email}
      onChangeText={text => props.setFieldValue('email', text)}
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    autoComplete: 'password',
  }
});

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values) => {
    console.log(values);
  }
})(Form);