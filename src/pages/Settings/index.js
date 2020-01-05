import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import IconSend from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '~/components/background';

import {Container, Form, FormInput, SaveButton} from './styles';

export default function Settings(props) {
  console.tron.log(props);
  const [protocol, setProtocol] = useState('');
  const [address, setAddress] = useState('');
  const [door, setDoor] = useState('');
  const [route, setRoute] = useState('');
  const [password, setPassword] = useState('');

  const enderecoRef = useRef();
  const portaRef = useRef();
  const rotaRef = useRef();
  const passwordRef = useRef();

  function handleSave() {
    let data = {};
    data.protocol = protocol;
    data.address = address;
    data.door = door;
    data.route = route;
    data.password = password;

    console.tron.log(data);
  }

  return (
    <Background>
      <Container>
        <View style={{marginBottom: 15}}>
          <IconSend name="cube-send" size={70} color="#fff" />
        </View>
        <Text>Configurações para envio dos dados</Text>

        <Form>
          <FormInput
            placeholder="Tipo de protocolo:"
            autoCorrect={false}
            autoCapitalize="none"
            value={protocol}
            returnKeyType="next"
            onSubmitEditing={() => enderecoRef.current.focus()}
            onChangeText={e => setProtocol(e)}
          />
          <FormInput
            placeholder="Endereço:"
            autoCorrect={false}
            autoCapitalize="none"
            value={address}
            returnKeyType="next"
            ref={enderecoRef}
            onSubmitEditing={() => portaRef.current.focus()}
            onChangeText={e => setAddress(e)}
          />
          <FormInput
            placeholder="Porta:"
            autoCorrect={false}
            autoCapitalize="none"
            value={door}
            returnKeyType="next"
            ref={portaRef}
            onSubmitEditing={() => rotaRef.current.focus()}
            onChangeText={e => setDoor(e)}
          />
          <FormInput
            placeholder="Rota:"
            value={route}
            returnKeyType="next"
            ref={rotaRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={e => setRoute(e)}
          />
          <FormInput
            placeholder="Senha:"
            secureTextEntry
            value={password}
            returnKeyType="send"
            ref={passwordRef}
            onChangeText={e => setPassword(e)}
            onSubmitEditing={handleSave}
          />
          <SaveButton>Salvar</SaveButton>
        </Form>
      </Container>
    </Background>
  );
}
