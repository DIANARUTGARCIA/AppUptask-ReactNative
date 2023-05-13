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

const Tarea = () => {
  return (
    <NativeBaseProvider>
      <View>
        <HStack></HStack>
      </View>
    </NativeBaseProvider>
  );
};

export default Tarea;
