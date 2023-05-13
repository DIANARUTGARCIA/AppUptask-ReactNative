import React, {useState} from 'react';
import {
  NativeBaseProvider,
  FormControl,
  Input,
  Stack,
  Heading,
  Button,
  Text,
} from 'native-base';
import {StyleSheet, View, Alert} from 'react-native';
import globalStyles from '../style/global';
import {gql, useMutation, useQuery} from '@apollo/client';

const NUEVA_TAREA = gql`
  mutation nuevaTarea($input: TareaInput) {
    nuevaTarea(input: $input) {
      nombre
      id
      proyecto
      estado
    }
  }
`;
const OBTENER_TAREAS = gql`
  query obtenerTareas($input: ProyectoIDInput) {
    obtenerTareas(input: $input) {
      id
      nombre
      estado
    }
  }
`;

const Proyecto = ({route}) => {
  const [nombre, guardarNombre] = useState('');
  // obtiene el iD del proyecto
  // const { id } = route.params;

  // apollo obtener tareas
  const {data, loading, error} = useQuery(OBTENER_TAREAS, {
    variables: {
      input: {
        proyecto: id,
      },
    },
  });
  // Apollo crear tareas
  const [nuevaTarea] = useMutation(NUEVA_TAREA, {
    update(cache, {data: {nuevaTarea}}) {
      const {obtenerTareas} = cache.readQuery({
        query: OBTENER_TAREAS,
        variables: {
          input: {
            proyecto: id,
          },
        },
      });

      cache.writeQuery({
        query: OBTENER_TAREAS,
        variables: {
          input: {
            proyecto: id,
          },
        },
        data: {
          obtenerTareas: [...obtenerTareas, nuevaTarea],
        },
      });
    },
  });
  const handleSubmit = async () => {
    if (nombre === '') {
      mostrarAlerta();
      return;
    }
    try {
      const {data} = await nuevaTarea({
        variables: {
          input: {
            nombre,
            proyecto: id,
          },
        },
      });
      guardarNombre('');
      Alert.alert('Creado', 'Tarea creada Correctamente', [
        {text: 'Ok', style: 'cancel'},
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'El Nombre de la tarea es obligatorio', [
      {text: 'Ok', style: 'cancel'},
    ]);
  };

  if (loading) return <Text>Cargando...</Text>;
  return (
    <NativeBaseProvider style={[globalStyles.contenedor]}>
      <View style={{marginHorizontal: '3%', marginTop: 20}}>
        <Input
          style={styles.input}
          placeholder="Nombre Tarea"
          value={nombre}
          onChangeText={texto => guardarNombre(texto)}
        />
        <Button
          style={globalStyles.boton}
          square
          block
          onPress={() => handleSubmit()}
        >
          <Text style={{color: '#fff'}}>Crear Tarea</Text>
        </Button>
      </View>
      <View>
        <Text style={globalStyles.subtitulo}>Tareas:</Text>
        <View>
          {data.obtenerTareas.map(tarea => (
            <Tarea key={tarea.id} tarea={tarea} proyectoId={id} />
          ))}
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
  },
});

export default Proyecto;
