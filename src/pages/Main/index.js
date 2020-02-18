import React from 'react';
import {Image, Dimensions, Text, View} from 'react-native';
import IconCross from 'react-native-vector-icons/FontAwesome5';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSetting from 'react-native-vector-icons/AntDesign';

import logo from '~/assets/Logo_white.png';
import Background from '~/components/background';

import {Container} from './styles';

const {width} = Dimensions.get('window');

export default function Main({navigation}) {
  //celtic-cross
  const date = new Date();

  return (
    <Background>
      <Container>
        <Image
          source={logo}
          style={{width: width * 0.5, height: width * 0.5}}
        />
        <Text
          style={{
            fontSize: 14,
            color: '#000',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Viagem Missionaria {date.getFullYear()}
        </Text>

        <View
          style={{
            marginTop: 15,
          }}>
          <IconCross.Button
            name="cross"
            backgroundColor="#3b9eff"
            color="#fff"
            borderRadius={10}
            onPress={() => navigation.navigate('Social')}>
            Ação Social
          </IconCross.Button>
          <View style={{marginTop: 10}}>
            <IconMC.Button
              name="baby"
              backgroundColor="#3b9eff"
              color="#fff"
              borderRadius={10}
              onPress={() => navigation.navigate('Children')}>
              Crianças
            </IconMC.Button>
          </View>
          <View style={{marginTop: 10}}>
            <IconMC.Button
              name="door-open"
              backgroundColor="#3b9eff"
              color="#fff"
              borderRadius={10}
              onPress={() => navigation.navigate('Door')}>
              Porta em Porta
            </IconMC.Button>
          </View>
          <View style={{marginTop: 10}}>
            <IconSetting.Button
              name="setting"
              backgroundColor="#3b9eff"
              color="#fff"
              borderRadius={10}
              onPress={() => navigation.navigate('Settings')}>
              Configurações
            </IconSetting.Button>
          </View>
        </View>
      </Container>
    </Background>
  );
}
