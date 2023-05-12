import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {
  NativeBaseProvider,
  FormControl,
  Input,
  Stack,
  Heading,
  Button,
  Text,
} from 'native-base';
import globalStyles from '../style/global';
import {useNavigation} from '@react-navigation/native';

const NuevoProyecto = () => {
  return (
    <NativeBaseProvider>
      <View style={globalStyles.contenedor}>
        <Stack>
          <Input
            variant="rounded"
            p={2}
            placeholder="Email"
            onChangeText={texto => setEmail(texto)}
          />
        </Stack>
        <Button>
          <Text>crear proyecto</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default NuevoProyecto;
