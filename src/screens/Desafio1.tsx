import React from 'react';
import { View, Text } from 'react-native';

export default function Desafio1() {
  let INDICE = 13, SOMA = 0, K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>SOMA final: {SOMA}</Text>
    </View>
  );
}