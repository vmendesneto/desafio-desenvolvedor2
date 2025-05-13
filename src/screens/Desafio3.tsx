import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { formatarValor } from '../utils/formatValue';

const dados = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
];

export default function Desafio3() {
  const [info, setInfo] = useState({ menor: 0, maior: 0, acimaMedia: 0 });

  useEffect(() => {
    const valores = dados.filter(d => d.valor > 0).map(d => d.valor);
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const acimaMedia = valores.filter(v => v > media).length;

    setInfo({ menor, maior, acimaMedia });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Menor valor: {formatarValor(info.menor)}</Text>
      <Text>Maior valor: {formatarValor(info.maior)}</Text>
      <Text>Dias acima da média: {info.acimaMedia}</Text>
    </View>
  );
}