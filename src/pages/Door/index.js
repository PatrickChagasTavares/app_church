import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Background from '~/components/background';

// import { Container } from './styles';

export default function Door() {
  return (
    <Background>
      <SafeAreaView>
        <Text>Children</Text>
      </SafeAreaView>
    </Background>
  );
}
