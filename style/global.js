import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    // flex: 1,
  },
  contenido:{
    flexDirection:'column',
    justifyContent:'center',
    marginHorizontal:'4%',
    flex:1
  },
  titulo:{
    textAlign:'center',
    marginBottom:8,
    fontSize:32,
    fontWeight:'bold',
  },
  boton:{
    marginTop:15,
    backgroundColor:'#28303B',
  },
  botontext:{
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'#fff'
  },
  enlace:{
    marginTop:60,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16,
    textTransform:'uppercase'

  }
  

 
});

export default globalStyles;