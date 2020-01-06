import React, {useState, useRef} from 'react';
import {View, Text, Alert} from 'react-native';
import IconSend from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

import Background from '~/components/background';

import {Container, Form, FormInput, SaveButton} from './styles';

import {configSaveRequest} from '~/store/modules/config/actions';

export default function Settings(props) {
  const [protocol, setProtocol] = useState('');
  const [address, setAddress] = useState('');
  const [door, setDoor] = useState('');
  const [route, setRoute] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.config.loading);

  const enderecoRef = useRef();
  const portaRef = useRef();
  const rotaRef = useRef();
  const passwordRef = useRef();

  function ValidData() {
    if (protocol.length === 0 || protocol !== ('http' || 'https')) {
      Alert.alert('Erro', 'Campo protocolo é inválido.');
      return false;
    } else {
      if (address.length === 0) {
        Alert.alert('Erro', 'Campo endereço é inválido.');
        return false;
      } else {
        if (door.length === 0) {
          Alert.alert('Erro', 'Campo porta de conexão é inválido.');
          return false;
        } else {
          if (route.length === 0) {
            Alert.alert('Erro', 'Campo rota é inválido.');
            return false;
          } else {
            if (password.length === 0) {
              Alert.alert('Erro', 'Campo senha é inválido.');
              return false;
            }
          }
        }
      }
    }
    return true;
  }

  function handleSave() {
    if (ValidData()) {
      dispatch(configSaveRequest(protocol, address, door, route, password));
    } else {
      return;
    }
  }

  return (
    <Background>
      <Container>
        <View style={{marginBottom: 15}}>
          <IconSend name="cube-send" size={70} color="#fff" />
        </View>
        <Text>Configurações para envio dos dados</Text>

        <Form>
          <Text>Tipo de protocolo:</Text>
          <FormInput
            placeholder="http"
            autoCorrect={false}
            autoCapitalize="none"
            value={protocol}
            returnKeyType="next"
            onSubmitEditing={() => enderecoRef.current.focus()}
            onChangeText={e => setProtocol(e)}
          />
          <Text>Endereço de conexão:</Text>
          <FormInput
            placeholder="localhost"
            autoCorrect={false}
            autoCapitalize="none"
            value={address}
            returnKeyType="next"
            ref={enderecoRef}
            onSubmitEditing={() => portaRef.current.focus()}
            onChangeText={e => setAddress(e)}
          />
          <Text>Porta:</Text>
          <FormInput
            placeholder="8080"
            autoCorrect={false}
            autoCapitalize="none"
            value={door}
            returnKeyType="next"
            ref={portaRef}
            onSubmitEditing={() => rotaRef.current.focus()}
            onChangeText={e => setDoor(e)}
          />
          <Text>Nome da rota:</Text>
          <FormInput
            placeholder="PIBVV"
            value={route}
            returnKeyType="next"
            autoCapitalize="none"
            ref={rotaRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={e => setRoute(e)}
          />
          <Text>Senha de conexão:</Text>
          <FormInput
            placeholder="Senha:"
            secureTextEntry
            value={password}
            returnKeyType="send"
            ref={passwordRef}
            onChangeText={e => setPassword(e)}
            onSubmitEditing={handleSave}
          />
          <View
            style={{
              display: 'flex',
            }}>
            <SaveButton loading={loading} onPress={handleSave}>
              Salvar e Enviar
            </SaveButton>
          </View>
        </Form>
      </Container>
    </Background>
  );
}
