import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Desafio1 from './src/screens/Desafio1';
import Desafio2 from './src/screens/Desafio2';
import Desafio3 from './src/screens/Desafio3';
import Desafio4 from './src/screens/Desafio4';
import Desafio5 from './src/screens/Desafio5';

const Stack = createNativeStackNavigator();
type RootStackParamList = {
  Início: undefined;
  Desafio1: undefined;
  Desafio2: undefined;
  Desafio3: undefined;
  Desafio4: undefined;
  Desafio5: undefined;
};
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Início'>;
};

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ padding: 20 }}>
      {[1, 2, 3, 4, 5].map(n => (
        <View key={n} style={{ marginVertical: 5 }}>
          <Button
            title={`Ir para Desafio ${n}`}
            onPress={() => navigation.navigate(`Desafio${n}` as keyof RootStackParamList)}
          />
        </View>
      ))}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Desafio1" component={Desafio1} />
        <Stack.Screen name="Desafio2" component={Desafio2} />
        <Stack.Screen name="Desafio3" component={Desafio3} />
        <Stack.Screen name="Desafio4" component={Desafio4} />
        <Stack.Screen name="Desafio5" component={Desafio5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
