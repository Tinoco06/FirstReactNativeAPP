import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const EnviarPin = () => {
  const [correo, setCorreo] = useState('');
  const navigation = useNavigation();

  const enviar = async () => {
    try {
      const respuesta = await axios.post('http://IP/api/usuarios/pin', { correo });
      Alert.alert('Mensaje:', respuesta.data.message);
      //Envia un parametro a la siguiente pantalla
      navigation.navigate('CambiarContrasena', { correo });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Recuparar Contraseña</Text>
      <TextInput
        style={estilos.entrada}
        placeholder="Correo"
        value={correo}
        onChangeText={(text) => setCorreo(text)}
      />
      <Button title="Enviar PIN" onPress={enviar} />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  entrada: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default EnviarPin;