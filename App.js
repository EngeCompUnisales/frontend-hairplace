import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { withFormik } from 'formik';

import api from './src/services/api'

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
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values) => {
    console.log(values);
  }
})(Form);

export default function App() {
  const [login, setLogin] = useState();

  useEffect(() => {
    api
      .get("/api/v1/login/"+login)
      .then((response) => setLogin(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
}