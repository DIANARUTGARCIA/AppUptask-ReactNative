import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {NativeBaseProvider, Button, Text, VStack} from 'native-base';
import globalStyles from '../style/global';
import {useNavigation} from '@react-navigation/native';
import {gql, useQuery} from '@apollo/client';

const OBTENER_PROYECTOS = gql`
  query obtenerProyectos {
    obtenerProyectos {
      id
      nombre
    }
  }
`;

const Proyectos = () => {
  //funcion para redireccionar
  const navigation = useNavigation();
  //apollo
  const {data, loading, error} = useQuery(OBTENER_PROYECTOS);
  if (loading) return <Text>Cargando...</Text>;
  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <Button
        onPress={() => navigation.navigate('NuevoProyecto')}
        style={[globalStyles.boton, {marginTop: 30}]}
      >
        <Text style={[globalStyles.botontext]}>Nuevo proyecto</Text>
      </Button>
      <Text style={styles.subtitle}>Seleccione un Proyecto</Text>
      <View style={globalStyles.contenido}>
        {data.obtenerProyectos.map(proyecto => (
          <View
            style={styles.tarjeta}
            key={proyecto.id}
            onPress={() => navigation.navigate('Proyecto,proyecto')}
          >
            <VStack>
              <Text>{proyecto.nombre} </Text>
            </VStack>
          </View>
        ))}
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

export default Proyectos;
