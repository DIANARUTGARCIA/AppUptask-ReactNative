import React from 'react';
import {View, Alert,StyleSheet} from 'react-native';
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
      <Text style={styles.subtitle}>Seleccione un Proyecto</Text>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  subtitle:{
    textAlign:'center',
    fontSize:26,
    fontWeight:'bold',
    color:'#000',
    marginTop:20,
    paddingTop:20,

  }
})

export default Proyectos;
