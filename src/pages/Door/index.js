import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import IconDate from 'react-native-vector-icons/MaterialIcons';
import IconChurch from 'react-native-vector-icons/FontAwesome5';

import moment from 'moment';

import Background from '~/components/background';
import Send_Clear from '~/components/Send_Clear';
import SelectPicker from '~/components/SelectPicker';
import SelectPickerMultiple from '~/components/SelectPickerMultiple';

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

  function handleDateConfirm(dateNew) {
    setDate(moment(dateNew).format('DD/MM/YYYY'));
    setOpenCalendar(false);
  }
  function handleDateCancel() {
    setOpenCalendar(false);
  }

  function handleClear() {
    setLoading(true);
    setTimeout(() => {
      setDate('');
      setCity([]);
      setName('');
      setAddress([]);
      setNumber();
      setComplement('');
      setYears([]);
      setNeed([]);
      setLoading(false);
    }, 1000);
  }

  function handleSetCity(e) {
    setCity(e);
    setAddress('');
    setNumber();
    setComplement('');
  }

  function handleSave() {}

  return (
    <Background>
      <Container>
        <Logo>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <IconChurch name="door-open" size={40} color="#fff" />
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
            {date ? date : '* Selecione uma data'}
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
                itens={Years[years - 1].type > 17 ? NeedOld : NeedNew}
                placeholder="Necessidades"
                setItem={setNeed}
                itemSelected={need}
                single={false}
                showDropDowns={true}
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
