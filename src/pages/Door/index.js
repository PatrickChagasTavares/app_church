import React, {useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import IconDate from 'react-native-vector-icons/MaterialIcons';
import IconChurch from 'react-native-vector-icons/FontAwesome5';
import IconHelp from 'react-native-vector-icons/Feather';

import moment from 'moment';

import Background from '~/components/background';
import Send_Clear from '~/components/Send_Clear';
import SelectPicker from '~/components/SelectPicker';
import SelectPickerMultiple from '~/components/SelectPickerMultiple';

import getRealm from '~/services/realm';

import {
  City,
  Cravinhos,
  NeedNew,
  NeedOld,
  Serrana,
  Tribe,
  Years,
} from '~/data.js';

import {
  Container,
  Logo,
  Line,
  Form,
  // TitleInput,
  TInput,
  FormInput,
  FormDataAddress,
  // ContainerSelect,
  // SaveButton,
  // CancelButton,
} from './styles';

export default function Social({navigation}) {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');
  const [tribe, setTribe] = useState([]);
  const [city, setCity] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState([]);
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState('');
  const [years, setYears] = useState([]);
  const [need, setNeed] = useState([]);
  const [note, setNote] = useState('');

  function handleDateConfirm(dateNew) {
    setDate(dateNew);
    setOpenCalendar(false);
  }
  function handleDateCancel() {
    setOpenCalendar(false);
  }

  function handleClear() {
    setLoading(true);
    setTimeout(() => {
      setTribe([]);
      setDate('');
      setCity([]);
      setName('');
      setAddress([]);
      setNumber();
      setComplement('');
      setYears([]);
      setNeed([]);
      setNote('');
      setLoading(false);
    }, 1000);
  }

  function handleSetCity(e) {
    setCity(e);
    setAddress('');
    setNumber();
    setComplement('');
  }

  function validData() {
    if (date.length === 0) {
      Alert.alert('PIB Valo Velho', 'Campo de data é obrigatório.');
      return false;
    }
    if (city.length === 0) {
      Alert.alert(
        'PIB Valo Velho',
        'Selecione uma cidade para liberar outros campos.',
      );
      return false;
    }
    if (name.length === 0) {
      Alert.alert('PIB Valo Velho', 'Campo de nome é obrigatório.');
      return false;
    }
    if (address.length === 0) {
      Alert.alert('PIB Valo Velho', 'Campo de endereço é obrigatório.');
      return false;
    }
    if (number.length === 0) {
      Alert.alert('PIB Valo Velho', 'Campo de Numero é obrigatório.');
      return false;
    }

    if (years.length === 0) {
      Alert.alert('PIB Valo Velho', 'Campo de idade é obrigatório.');
      return false;
    }

    return true;
  }

  async function validNeed_Actions() {
    let data = {
      bible: '',
      evangelical: '',
      contact: '',
      frequentsChurch: '',
      cultHome: '',
      studyBible: '',
      studyConfimation: '',
      prayerRequest: '',
      reconciled: '',
      visit: '',
      acceptChrist: '',
    };

    await need.map(item => {
      var i =
        Years[years - 1].type > 17 ? NeedOld[item - 1] : NeedNew[item - 1];

      if (i.dbName === 'bible') {
        data.bible = i.type;
        return i;
      } else if (i.dbName === 'evangelical') {
        data.evangelical = i.type;
        return;
      } else if (i.dbName === 'contact') {
        data.contact = i.type;
        return;
      } else if (i.dbName === 'frequentsChurch') {
        data.frequentsChurch = i.type;
        return;
      } else if (i.dbName === 'cultHome') {
        data.cultHome = i.type;
        return;
      } else if (i.dbName === 'studyBible') {
        data.studyBible = i.type;
        return;
      } else if (i.dbName === 'studyConfimation') {
        data.studyConfimation = i.type;
        return;
      } else if (i.dbName === 'prayerRequest') {
        data.prayerRequest = i.type;
        return;
      } else if (i.dbName === 'reconciled') {
        data.reconciled = i.type;
        return;
      } else if (i.dbName === 'visit') {
        data.visit = i.type;
        return;
      } else if (i.dbName === 'acceptChrist') {
        data.acceptChrist = i.type;
        return;
      }
    });

    return data;
  }

  async function handleSaveDB(dataNeed) {
    const data = {
      id: moment().valueOf(),
      data: date,
      nameTribe: Tribe[tribe - 1].name,
      namePerson: name,
      address: `${
        City[city - 1].name === 'Cravinhos'
          ? Cravinhos[address - 1].name
          : Serrana[address - 1].name
      }, ${number} ${complement}`,
      age: Years[years - 1].type,
      bible: dataNeed.bible || '',
      evangelical: dataNeed.evangelical || '',
      contact: dataNeed.contact || '',
      frequentsChurch: dataNeed.frequentsChurch || '',
      cultHome: dataNeed.cultHome || '',
      studyBible: dataNeed.studyBible || '',
      studyConfimation: dataNeed.studyConfimation || '',
      prayerRequest: dataNeed.prayerRequest || '',
      reconciled: dataNeed.reconciled || '',
      visit: dataNeed.visit || '',
      acceptChrist: dataNeed.acceptChrist || '',
      note: note || '',
    };

    try {
      const realm = await getRealm();
      realm.write(() => {
        realm.create('DoorToDoor', data);
      });
      realm.close();
    } catch (error) {
      Alert.alert('PIB Valo Velho', 'Erro ao savar dados.');
    }
  }

  async function handleSave() {
    setLoading(true);
    try {
      if (validData()) {
        let data = await validNeed_Actions();
        handleSaveDB(data);
        handleClear();
        Alert.alert('PIB Valo Velho', 'Dados salvos com sucesso.');
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('PIB Valo Velho', 'Erro ao salvar dados');
      setLoading(false);
    }
  }

  return (
    <Background>
      <Container>
        <Logo>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <>
              <IconChurch
                name="door-open"
                size={40}
                color="#fff"
                style={{marginRight: 50}}
              />
              <IconHelp
                name="help-circle"
                size={40}
                color="#fff"
                style={{marginLeft: 50}}
                onPress={() => navigation.navigate('Information')}
              />
            </>
          )}
        </Logo>

        <Line />
        <Form>
          <IconDate.Button
            name="date-range"
            backgroundColor="#fff"
            color="#3b9eff"
            borderRadius={10}
            onPress={() => setOpenCalendar(true)}>
            {date ? moment(date).format('DD/MM/YYYY') : '* Selecione uma data'}
          </IconDate.Button>

          <DateTimePicker
            isVisible={openCalendar}
            onConfirm={handleDateConfirm}
            onCancel={handleDateCancel}
          />

          <SelectPicker
            itens={Tribe}
            placeholder="Selecione sua Tribo"
            setItem={setTribe}
            itemSelected={tribe}
          />

          <SelectPicker
            itens={City}
            placeholder="Selecione uma cidade"
            setItem={handleSetCity}
            itemSelected={city}
          />

          {/* <TitleInput>* Nome</TitleInput> */}
          <FormInput
            placeholder="Nome Completo"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            returnKeyType="next"
            // ref={enderecoRef}
            // onSubmitEditing={() => portaRef.current.focus()}
            onChangeText={e => setName(e)}
          />

          {city.length > 0 && (
            <SelectPicker
              itens={City[city - 1].name === 'Cravinhos' ? Cravinhos : Serrana}
              placeholder="Selecione um endereço"
              setItem={setAddress}
              itemSelected={address}
            />
          )}

          {address.length > 0 && (
            <FormDataAddress>
              <TInput
                placeholder="Numero"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                value={number}
                returnKeyType="next"
                // ref={enderecoRef}
                // onSubmitEditing={() => portaRef.current.focus()}
                onChangeText={e => setNumber(e)}
              />
              <TInput
                placeholder="Complemento"
                autoCorrect={false}
                autoCapitalize="none"
                value={complement}
                returnKeyType="next"
                // ref={enderecoRef}
                // onSubmitEditing={() => portaRef.current.focus()}
                onChangeText={e => setComplement(e)}
              />
            </FormDataAddress>
          )}

          {address.length > 0 && (
            <SelectPicker
              itens={Years}
              placeholder="Faixa Etária"
              setItem={setYears}
              itemSelected={years}
            />
          )}

          {years.length > 0 && (
            <>
              <SelectPickerMultiple
                itens={parseInt(Years[years - 1].type) > 17 ? NeedOld : NeedNew}
                placeholder="Necessidades"
                setItem={setNeed}
                itemSelected={need}
                single={false}
                showDropDowns={true}
              />
              <Line />
              <FormInput
                placeholder="Observações"
                autoCorrect={false}
                autoCapitalize="none"
                value={note}
                onChangeText={e => setNote(e)}
              />
              <Line />
            </>
          )}

          <Send_Clear
            loading={loading}
            handleClear={() => handleClear()}
            handleSave={() => handleSave()}
          />
        </Form>
      </Container>
    </Background>
  );
}
