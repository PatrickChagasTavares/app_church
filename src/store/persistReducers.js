import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'PIB_VV',
      storage: AsyncStorage,
      whitelist: ['config'],
    },
    reducers,
  );

  return persistedReducer;
};
