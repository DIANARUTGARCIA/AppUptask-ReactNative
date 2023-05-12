import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
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
//APOLLO
import {gql, useMutation} from '@apollo/client';

const NUEVA_CUENTA = gql`
  mutation crearUsario($input: UsuarioInput) {
    crearUsuario(input: $input)
  }
`;

const CrearCuenta = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, guardarMensaje] = useState(null);

  //funcion para redireccionar
  const navigation = useNavigation();
 

  //apollo
  const [crearUsuario] = useMutation(NUEVA_CUENTA);

  //Función al presionar crear cuenta
  const handleSubmit = async () => {
    if (nombre === '' || email === '' || password === '') {
      mostrarAlerta();
      return;
    }
    if (password.length < 6) {
      mostrarAlerta2();
      return;
    }
    //guardar usuario
    try {
      const {data} = await crearUsuario({
        variables: {
          input: {
            nombre,
            email,
            password,
          },
        },
      });
       Alert.alert(`Usuario creado correctamente`, [{text: 'Ok', style: 'cancel'}]);
      navigation.navigate('Login');
    } catch (error) {
      const advertencia = error.message.replace('GraphQL error', '');
      guardarMensaje(error.message.replace('GraphQL error', ''))
      Alert.alert('Error', `${mensaje}`, [{text: 'Ok', style: 'cancel'}]);
    }
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {text: 'Ok', style: 'cancel'},
    ]);
  };
  const mostrarAlerta2 = () => {
    Alert.alert('Error', 'El password debe ser  al menos 6 caracteres', [
      {text: 'Ok', style: 'cancel'},
    ]);
  };

  return (
    <NativeBaseProvider style={[globalStyles.contenedor]}>
      <View style={globalStyles.contenido}>
         <View style={globalStyles.contenido2}>
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
          onPress={() => handleSubmit()}
          style={globalStyles.boton}
          borderRadius="full"
        >
          <Text style={globalStyles.botontext}>Crear cuenta</Text>
        </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default CrearCuenta;
