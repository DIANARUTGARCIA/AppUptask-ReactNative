import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NativeBaseProvider,
  FormControl,
  Input,
  Stack,
  Heading,
  Button,
  Text,
} from 'native-base';
import globalStyles from '../style/global';
import {useNavigation} from '@react-navigation/native';


const Login = () => {
  //funcion para redireccionar
  const navigation = useNavigation();
  return (
    <NativeBaseProvider style={[globalStyles.contenedor]}>
      <View style={globalStyles.contenido}>
        <Heading style={globalStyles.titulo}>Login</Heading>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                variant="underlined"
                autoComplete="email"
                p={2}
                placeholder="Email"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                secureTextEntry={true}
                variant="underlined"
                p={2}
                placeholder="contraseña"
              />
            </Stack>
          </Stack>
        </FormControl>

        <Button style={globalStyles.boton} borderRadius="full">
          <Text style={globalStyles.botontext}>Iniciar Sesión</Text>
        </Button>

        <Text
          onPress={() => navigation.navigate('CrearCuenta')}
          style={globalStyles.enlace}
        >
          Crear Cuenta
        </Text>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  contenido: {
    marginHorizontal: '2.5%',
    marginTop: 10,
  },
});

export default Login;
