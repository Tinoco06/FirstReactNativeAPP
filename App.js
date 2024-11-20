import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Login from './src/componentes/Login/Login';

const App = () => {
  return (
    <Login></Login>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: 'darkgray',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
    margin: 10,
  },
  subtitulo: {
    color: 'gray',
    fontSize: 15,
    margin: 10,
  },
  image: {
    borderWidth: 2, 
    borderColor: "#000",
    margin: 20,
    width: 200,
    height: 300,
    borderRadius: 100,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#D3D3D3',
    borderColor: "darkgray",   
    borderWidth: 2,    
  },
  buttonText: {
    fontSize: 16,
  },
});

export default App;
