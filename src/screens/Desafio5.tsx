import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Desafio5() {
  const [texto, setTexto] = useState('');
  const [invertido, setInvertido] = useState('');

  const inverter = () => {
    let resultado = '';
    for (let i = texto.length - 1; i >= 0; i--) {
      resultado += texto[i];
    }
    setInvertido(resultado);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite algo"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Inverter" onPress={inverter} />
      <Text style={{ marginTop: 10 }}>Resultado: {invertido}</Text>
    </View>
  );
}