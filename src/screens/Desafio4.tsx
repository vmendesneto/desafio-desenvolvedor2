import React from 'react';
import { View, Text } from 'react-native';
import { formatarPercentual } from '../utils/formatValue';

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

export default function Desafio4() {
  const total = Object.values(faturamento).reduce((a, b) => a + b, 0);

  return (
    <View style={{ padding: 20 }}>
      {Object.entries(faturamento).map(([estado, valor]) => {
      const percentual = valor / total;
      return (
        <Text key={estado}>
            {estado}: {formatarPercentual(percentual)}
        </Text>
  );
})}
    </View>
  );
}