import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    // flex: 1,
  },
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#E4E8EA',
  },
  contenido3: {
    backgroundColor: '#fff',
    paddingHorizontal: '3%',
    marginHorizontal: '4%',
    paddingVertical: '3%',
  },
  contenido2: {
    backgroundColor: '#fff',
    paddingHorizontal: '3%',
    marginHorizontal: '4%',
    paddingVertical: '3%',
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#00A9FD',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.68,
    shadowRadius: 3,

    elevation: 8,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 8,
    paddingTop: 8,
    fontSize: 32,
    fontWeight: 'bold',
  },
  boton: {
    marginTop: 15,
    backgroundColor: '#0088FD',
  },
  botontext: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
  },
  enlace: {
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    paddingBottom: 5,
  },
  subtitulo: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
  },
});

export default globalStyles;
