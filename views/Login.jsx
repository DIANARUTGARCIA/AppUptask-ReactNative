import React, {useState} from 'react';
import {View, Alert} from 'react-native';
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
//APOLLO
import {gql, useMutation} from '@apollo/client';
import { AsyncStorage} from '@react-native-async-storage/async-storage'

const AUTENTICAR_USUARIO = gql`
  mutation autenticarUsuario($input:AutenticarInput){
  autenticarUsuario(input: $input) {
    token
  }
}
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, guardarMensaje] = useState(null);

  //funcion para redireccionar
  const navigation = useNavigation();

  //apollo
  const [autenticarUsuario] = useMutation(AUTENTICAR_USUARIO);

  const handleSubmit = async () => {
    if (email === '' || password === '') {
      mostrarAlerta();
      return;
    }

    try {
      const {data} = await autenticarUsuario({
       variables: {
          input: {
            email,
            password,
          },
        },
      });
      const {token} = data.autenticarUsuario;
      //guardar el token
      await AsyncStorage.setItem('token',token);
      navigation.navigate('Proyectos')
      console.log(data);
    } catch (error) {
      
      console.log(error)
      const advertencia = error.message.replace('GraphQL error', '');
      guardarMensaje(error.message.replace('GraphQL error', ''));
      Alert.alert('Error', `${advertencia}`, [{text: 'Ok', style: 'cancel'}]);
    }
  };
  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {text: 'Ok', style: 'cancel'},
    ]);
  };
  return (
    <NativeBaseProvider style={[globalStyles.contenedor]}>
      <View style={globalStyles.contenido}>
        <View style={globalStyles.contenido2}>
          <Heading style={globalStyles.titulo}>UpTask</Heading>
          <FormControl>
            <Stack space={5}>
              <Stack>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  variant="underlined"
                  autoComplete="email"
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
            onPress={() => handleSubmit()}
            style={globalStyles.boton}
            borderRadius="full"
          >
            <Text style={globalStyles.botontext}>Iniciar Sesión</Text>
          </Button>

          <Text
            onPress={() => navigation.navigate('CrearCuenta')}
            style={globalStyles.enlace}
          >
            Crear Cuenta
          </Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Login;
