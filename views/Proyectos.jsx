import React from 'react';
import {View, Alert} from 'react-native';
import {
  NativeBaseProvider,
  Button,
  Text,
} from 'native-base';
import globalStyles from '../style/global';
import {useNavigation} from '@react-navigation/native';

const Proyectos = () => {
   //funcion para redireccionar
  const navigation = useNavigation();
  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <Button onPress={()=>navigation.navigate('NuevoProyecto')}
       style={[globalStyles.boton, {marginTop: 30}]} >
        <Text style={[globalStyles.botontext]} >
          Nuevo proyecto
        </Text>
      </Button>
      <Text>Seleccione un Proyecto</Text>
    </NativeBaseProvider>
  );
};

export default Proyectos;
