import {Platform} from 'react-native';

import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
`;

export const Logo = styled.View`
  margin-top: 30px;
`;

export const Line = styled.View`
  margin-top: 1px;
  border-style: solid;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  width: 100%;
`;

export const Form = styled.ScrollView.attrs({
  alwaysBounceHorizontal: false,
  alwaysBounceVertical: true,
})`
  margin-top: 10px;
  /* padding-bottom: 30px; */
  padding-right: 10px;
  padding-left: 10px;
`;

export const TitleInput = styled.Text`
  margin-top: 10px;
  margin-bottom: 5px;
  color: #fff;
  /* align-content: flex-start; */
`;

export const FormInput = styled(Input)`
  margin-top: 5px;
`;

export const ContainerSelect = styled.View`
  margin-top: 5px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 46px;
`;

export const FormDataAddress = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  /* background: #ddd; */
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.5)',
})`
  width: 45%;
  font-size: 15px;
  /* margin-left: 10px; */
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #000;
  padding-left: 20px;
`;
