import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from "axios";
//import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigation = useNavigation();
    const iniciarSesion = async () => {
        try {
            const respuesta = await axios.post('/api/usuarios/iniciarsesion', { login: usuario, contrasena: contrasena });
            Alert.alert(respuesta.data);
        } catch (error) {
            Alert.alert(error);
        }
    }
    return (
        <View style={estilos.contenedor}>
            <Text style={estilos.titulo}>Login</Text>
            <TextInput
                style={estilos.entradas}
                placeholder="Usuario o correo"
                value={usuario}
                onChangeText={(text) => setUsuario(text)}
            />
            <TextInput
                style={estilos.entradas}
                placeholder="Contrasena"
                secureTextEntry
                value={contrasena}
                onChangeText={(text) => setContrasena(text)}
            />
            <Button title="Iniciar" onPress={iniciarSesion} />
        {/*<Button title="Desea recuperar la contraseña?" onPress={() => navigation.navigate('RecuperarContrasena')} />*/} 
        </View>
    );
};

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    titulo: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center'
    },
    entradas: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8
    }
});

export default Login;