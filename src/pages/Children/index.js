import React, {useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import IconDate from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

import Background from '~/components/background';
import Send_Clear from '~/components/Send_Clear';

import getRealm from '~/services/realm';

import {
  Container,
  Logo,
  Form,
  InputTotal,
  InputNote,
  SaveButton,
  CancelButton,
} from './styles';

export default function Children() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState('');
  const [totalChildren, setTotalChildren] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  function handleDateConfirm(dateNew) {
    setDate(dateNew);
    setOpenCalendar(false);
  }
  function handleDateCancel() {
    setOpenCalendar(false);
  }

  async function handleSaveDB() {
    const data = {
      id: moment().valueOf(),
      data: date,
      total: parseInt(totalChildren),
      note: note || '',
    };

    getRealm()
      .then(realm => {
        realm.write(() => {
          realm.create('children', data);
        });
        realm.close();
      })
      .catch(error => {
        Alert.alert('error', error);
        Alert.alert('PIB Valo Velho', 'Erro ao savar dados.');
      });
  }

  async function handleSave() {
    setLoading(true);
    try {
      if (date.length === 0) {
        Alert.alert('PIB Valo Velho', 'Campo de data é obrigatório');
        setLoading(false);
        return;
      }
      if (totalChildren.length === 0) {
        Alert.alert('PIB Valo Velho', 'Campo de Total é obrigatório');
        setLoading(false);
        return;
      }
      handleSaveDB();
      handleClear();
      Alert.alert('PIB Valo Velho', 'Dados salvos com sucesso.');

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      Alert.alert('PIB Valo Velho', 'Erro ao salvar dados');
      setLoading(false);
    }
  }

  function handleClear() {
    setTotalChildren('');
    setDate('');
    setNote('');
  }

  return (
    <Background>
      <Container>
        <Logo>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <IconDate name="child-friendly" size={70} color="#fff" />
          )}
        </Logo>

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

          <InputTotal
            icon="child-care"
            placeholder="* Total de crianças"
            value={totalChildren}
            keyboardType={'numeric'}
            returnKeyType="send"
            onChangeText={e => setTotalChildren(e)}
            // onClick={Keyboard.}
          />
          <InputNote
            icon="note"
            placeholder="Observacão"
            value={note}
            returnKeyType="send"
            onChangeText={e => setNote(e)}
          />

          <Send_Clear
            loading={loading}
            handleClear={handleClear}
            handleSave={handleSave}
          />
        </Form>
      </Container>
    </Background>
  );
}
