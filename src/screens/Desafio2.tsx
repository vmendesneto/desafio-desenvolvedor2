import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function Desafio2() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const verificaFibonacci = (num: number) => {
    let a = 0, b = 1;
    while (b < num) {
      [a, b] = [b, a + b];
    }
    return b === num || num === 0;
  };

  const verificar = () => {
    const num = parseInt(input);
    if (isNaN(num)) {
      return setResultado('Número inválido');
    }
    const pertence = verificaFibonacci(num);
    setResultado(`O número ${num} ${pertence ? 'PERTENCE' : 'NÃO pertence'} à sequência.`);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite um número"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Verificar" onPress={verificar} />
      <Text style={{ marginTop: 10 }}>{resultado}</Text>
    </View>
  );
}