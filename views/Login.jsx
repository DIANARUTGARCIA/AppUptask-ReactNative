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

const Login = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.contenido}>
        <Heading>Login</Heading>
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
        <Button borderRadius="full">
          <Text>Iniciar Sesión</Text>
        </Button>
        <Text>Crear Cuenta</Text>
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
