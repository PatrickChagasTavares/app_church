import {all, put, takeLatest, delay} from 'redux-saga/effects';
import {Alert} from 'react-native';
import axios from 'axios';

import {configSaveSuccess, configSaveFailure} from '../config/actions';

export function* SaveData({payload}) {
  console.tron.log(payload);
  const {protocol, address, door, route} = payload;

  const api = axios.create({
    baseURL: `${protocol}://${address}:${door}/${route}`,
  });
  yield api
    .get()
    .then(resp => {
      Alert.alert('PIB Valo Velho', 'Dados salvos com sucesso');
    })
    .catch(error => {
      Alert.alert('Error', 'Falha ao Salvar os dados');
    });
  yield put(configSaveSuccess());
}

export default all([takeLatest('@config/SAVE_REQUEST', SaveData)]);
