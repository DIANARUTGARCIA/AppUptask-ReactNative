import React from 'react';
import {
  NativeBaseProvider,
  FormControl,
  Input,
  Stack,
  Heading,
  Button,
  Text,
  HStack,
} from 'native-base';
import {StyleSheet, View, Alert} from 'react-native';

// Consulta las tareas del proyecto
const OBTENER_TAREAS = gql`
  query obtenerTareas($input: ProyectoIDInput) {
    obtenerTareas(input: $input) {
      id
      nombre
      estado
    }
  }
`;
const ACTUALIZAR_TAREA = gql`
  mutation actualizarTarea($id: ID!, $input: TareaInput, $estado: Boolean) {
    actualizarTarea(id: $id, input: $input, estado: $estado) {
      nombre
      id
      proyecto
      estado
    }
  }
`;

const ELIMINAR_TAREA = gql`
  mutation eliminarTarea($id: ID!) {
    eliminarTarea(id: $id)
  }
`;

const Tarea = () => {
  const [actualizarTarea] = useMutation(ACTUALIZAR_TAREA);
  const [eliminarTarea] = useMutation(ELIMINAR_TAREA, {
    update(cache) {
      const {obtenerTareas} = cache.readQuery({
        query: OBTENER_TAREAS,
        variables: {
          input: {
            proyecto: proyectoId,
          },
        },
      });

      cache.writeQuery({
        query: OBTENER_TAREAS,
        variables: {
          input: {
            proyecto: proyectoId,
          },
        },
        data: {
          obtenerTareas: obtenerTareas.filter(
            tareaActual => tareaActual.id !== tarea.id,
          ),
        },
      });
    },
  });

  const cambiarEstado = async () => {
    // obtener el ID de la tarea
    const {id} = tarea;
    console.log(!tarea.estado);

    try {
      const {data} = await actualizarTarea({
        variables: {
          id,
          input: {
            nombre: tarea.nombre,
          },
          estado: !tarea.estado,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const mostrarEliminar = () => {
    Alert.alert('Eliminar Tarea', '¿Deseas eliminar esta tarea?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () => eliminarTareaDB(),
      },
    ]);
  };
  const eliminarTareaDB = async () => {
    const {id} = tarea;

    try {
      const {data} = await eliminarTarea({
        variables: {
          id,
        },
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NativeBaseProvider>
      <View>
        <HStack></HStack>
      </View>
    </NativeBaseProvider>
  );
};

export default Tarea;
