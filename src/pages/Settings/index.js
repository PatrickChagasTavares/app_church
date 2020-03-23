import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Alert, ActivityIndicator} from 'react-native';
import IconSend from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
// import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import Background from '~/components/background';

import getRealm from '~/services/realm';

import {
  Container,
  Form,
  FormInput,
  ContainerButton,
  SaveButton,
} from './styles';

// import {configSaveRequest} from '~/store/modules/config/actions';

export default function Settings({navigation}) {
  const [protocol, setProtocol] = useState('');
  const [address, setAddress] = useState('');
  const [door, setDoor] = useState('');
  const [route, setRoute] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [childrenData, setChildrenData] = useState([]);
  const [doorData, setDoorData] = useState([]);
  const [socialData, setSocialData] = useState([]);
  // const [selected, setSelected] = useState([]);
  // const list = [
  //   {id: 1, name: 'http'},
  //   {id: 2, name: 'https'},
  // ];

  const enderecoRef = useRef();
  const portaRef = useRef();
  const rotaRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    getDataRealm();
  }, []);

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

  function clearFields() {
    setProtocol('');
    setAddress('');
    setDoor('');
    setRoute('');
    setPassword('');
  }

  function getDataRealm() {
    getRealm()
      .then(realm => {
        const childrenRealm = realm.objects('children');
        const childrenRealmArray = Array.from(childrenRealm);
        console.log('childrenData: ', childrenRealmArray);
        setChildrenData(childrenRealmArray);
        const doorRealm = realm.objects('DoorToDoor');
        const doorRealmArray = Array.from(doorRealm);
        console.log('doorRealm: ', doorRealmArray);
        setDoorData(doorRealmArray);
        const socialRealm = realm.objects('Social');
        const socialRealmArray = Array.from(socialRealm);
        console.log('socialRealm: ', socialRealmArray);
        setSocialData(socialRealmArray);
        // realm.close();
      })
      .catch(error => {
        Alert.alert('error: ', error);
      });
  }

  // async function getData(database) {
  //   const realm = await getRealm();

  //   // try {
  //   const data = realm.objects(database).sorted('id', true);
  //   // } catch (error) {
  //   //   Alert.alert('PIB Valo Velho', 'Erro ao trazer dados.');
  //   // }

  //   let array = Array.from(data);

  //   // realm.close();

  //   return array;
  // }
  async function clearData() {
    await getRealm()
      .then(realm => {
        realm.write(() => {
          let allDoorToDoor = realm.objects('DoorToDoor');
          let allSocial = realm.objects('Social');
          let allchildren = realm.objects('children');
          realm.delete(allDoorToDoor); // Deletes all Data
          realm.delete(allSocial); // Deletes all Data
          realm.delete(allchildren); // Deletes all Data
        });
        realm.close();
      })
      .catch(error => {
        console.log('error delete data:', error);

        Alert.alert('error: ', error);
      });
  }

  async function SaveData() {
    const api = axios.create({
      baseURL: `${protocol}://${address}:${door}`,
    });

    if (
      doorData.length === 0 &&
      socialData.length === 0 &&
      childrenData.length === 0
    ) {
      Alert.alert('PIB Valo Velho', 'Não existem dados a serem salvos.');
      clearFields();
      setLoading(false);
    } else {
      await api
        .post(`/${route}`, {
          DoorToDoor: doorData,
          Social: socialData,
          children: childrenData,
        })
        .then(() => {
          clearData();
          // yield api.post(dados);
          Alert.alert('PIB Valo Velho', 'Dados salvos com sucesso.');
          clearFields();
          // setTimeout(() => {
          setLoading(false);
          // }, 500);
        })
        .catch(error => {
          setLoading(false);
          console.log('PIB Valo Velho Error: ', error);
          Alert.alert('PIB Valo Velho', 'Erro ao enviar dados.');
        });
    }
  }

  function handleSave() {
    setLoading(true);
    if (ValidData()) {
      // getDataRealm();
      SaveData();
    } else {
      setLoading(false);
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
          {/* <View> */}
          {/* <SectionedMultiSelect
            items={list}
            uniqueKey="id"
            selectText="Selecione um protocolo"
            onSelectedItemsChange={e => setSelected(e)}
            selectedItems={selected}
            single={true}
          /> */}
          {/* </View> */}
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
            keyboardType="numeric"
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
          <View>
            <ContainerButton onPress={() => handleSave()}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <SaveButton>Enviar dados</SaveButton>
              )}
            </ContainerButton>
          </View>
        </Form>
      </Container>
    </Background>
  );
}
