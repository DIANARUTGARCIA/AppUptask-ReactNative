import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './views/Login';
import CrearCuenta from './views/CrearCuenta';
const Stack = createNativeStackNavigator();
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App=()=>{


 
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen
         name="Login"
         component={Login}
         options={{
          title: "Iniciar Sesión",
          headerShown: false
         }}
      />
      <Stack.Screen
         name="CrearCuenta"
         component={CrearCuenta}
         options={{
          title: "Crear Cuenta",
          headerStyle:{
             backgroundColor:'#000'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
         }}
      />

    </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
