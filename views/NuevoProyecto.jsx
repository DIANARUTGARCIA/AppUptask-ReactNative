import React, {useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
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

const NUEVO_PROYECTO = gql`
  mutation nuevoProyecto($input: ProyectoInput) {
    nuevoProyecto(input: $input) {
      nombre
      id
    }
  }
`;

const NuevoProyecto = () => {
  const [nombre, setNombre] = useState('');
  //apolo
  const [nuevoProyecto] = useMutation(NUEVO_PROYECTO);

  const navigation = useNavigation();

  const handelSubmit = async () => {
    if (nombre === '') {
      mostrarAlerta();
      return;
    }
    //alamacenar en la BD
    try {
      const {data} = await nuevoProyecto({
        variables: {
          input: {
            nombre,
          },
        },
      });
      console.log(data);
      Alert.alert('Creado', 'Proyecto creado Correctamente', [
        {text: 'Ok', style: 'cancel'},
      ]);
      navigation.navigate('Proyectos');
    } catch (error) {
      console.log(error);
      const advertencia = error.message.replace('GraphQL error', '');
      Alert.alert('Error', `${advertencia}`, [{text: 'Ok', style: 'cancel'}]);
    }
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {text: 'Ok', style: 'cancel'},
    ]);
  };

  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <View style={globalStyles.contenido}>
        <View style={globalStyles.contenido3}>
          <FormControl>
            <Text style={[styles.subtitle, {paddingBottom: 20}]}>
              Nuevo Proyecto
            </Text>

            <Input
              p={2}
              placeholder="Nombre del proyecto"
              onChangeText={texto => setNombre(texto)}
            />

            <Button
              onPress={() => handelSubmit()}
              style={[globalStyles.boton, {marginTop: 30}]}
            >
              <Text style={globalStyles.botontext}>crear proyecto</Text>
            </Button>
          </FormControl>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  subtitle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    paddingTop: 20,
  },
});

export default NuevoProyecto;
