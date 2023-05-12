import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NativeBaseProvider,
  FormControl,
  Input,
  Stack,
  Heading,
  Button,
  Text,
  useToast,
} from 'native-base';
import globalStyles from '../style/global';
import {useNavigation} from '@react-navigation/native';

const CrearCuenta = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, guardarMensaje] = useState(null);

  //funcion para redireccionar
  const navigation = useNavigation();
  //Función al presionar crear cuenta
  const handleSubmit = () => {
    if (nombre === '' || email === '' || password === '') {
      guardarMensaje('Todos los campos son obligatorios');
      mostrarAlerta();
      return;
    }
    if (password.length < 6) {
      guardarMensaje('el password debe ser  al menos 6 caracteres');
    }
  };
  //mostrar mensaje
  const mostrarAlerta = () => {
    const toast = useToast();
    toast.show({
      title: 'Account verified',
      description: 'Hello world',
    });
  };
  //si los campos estan vacios alter
  const toast = useToast();

  return (
    <NativeBaseProvider style={[globalStyles.contenedor]}>
      <View style={globalStyles.contenido}>
        <Heading style={globalStyles.titulo}>Crear Cuenta</Heading>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Nombre</FormControl.Label>
              <Input
                variant="underlined"
                p={2}
                placeholder="Nombre"
                onChangeText={texto => setNombre(texto)}
              />
            </Stack>
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                variant="underlined"
                p={2}
                placeholder="Email"
                onChangeText={texto => setEmail(texto)}
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                secureTextEntry={true}
                variant="underlined"
                p={2}
                placeholder="contraseña"
                onChangeText={texto => setPassword(texto)}
              />
            </Stack>
          </Stack>
        </FormControl>

        <Button
          // onPress={() => }
          onPress={() =>
            toast.show({
              description: 'Hello world',
            })
          }
          style={globalStyles.boton}
          borderRadius="full"
        >
          <Text style={globalStyles.botontext}>Crear cuenta</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default CrearCuenta;
