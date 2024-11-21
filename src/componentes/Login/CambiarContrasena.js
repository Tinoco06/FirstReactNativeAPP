import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CambiarContrasena = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { correo } = route.params; //El parametro que se recibe de EnviarPin
  const [pin, setPin] = useState('');
  const [nuevaContrasena, setnuevaContrasena] = useState('');

  const cambiar = async () => {
    try {
      const respuesta = await axios.post('http://IP/api/usuarios/actualizar/contrasena', { pin: pin, contrasena: nuevaContrasena, correo: correo });
      console.log('Cambiar Contraseña:', respuesta.data.message);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cambiar contraseña:', error);
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Cambiar Contraseña</Text>
      <TextInput
        style={estilos.entrada}
        placeholder={"Escriba el PIN enviado a " + correo}
        value={pin}
        onChangeText={(text) => setPin(text)}
      />
      <TextInput
        style={estilos.entrada}
        placeholder="Nueva Contraseña"
        secureTextEntry
        value={nuevaContrasena}
        onChangeText={(text) => setnuevaContrasena(text)}
      />
      <Button title="Cambiar Contraseña" onPress={cambiar} />
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

export default CambiarContrasena;