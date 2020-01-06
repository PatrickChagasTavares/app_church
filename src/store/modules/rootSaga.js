import {all} from 'redux-saga/effects';

import config from './config/sagas';

export default function* rootSaga() {
  return yield all([config]);
}
