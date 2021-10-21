import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { withFormik } from 'formik';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  }
)

const Form = (props) => (
  <View style={styles.container}>
    <TextInput
      value={props.values.email}
      onChangeText={text => props.setFieldValue('email', text)}
    />
    <TextInput
      value={props.values.password}
      onChangeText={text => props.setFieldValue('password', text)}
    />
    <Button
      onPress={props.handleSubmit}
      title="Login"
    />
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values) => {
    console.log(values);
  }
})(Form);