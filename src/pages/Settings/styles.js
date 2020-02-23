import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.ScrollView.attrs({
  alwaysBounceHorizontal: false,
  alwaysBounceVertical: true,
})`
  width: 100%;
  margin-top: 50px;
  /* padding-bottom: 30px; */
  padding: 0 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const ContainerButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  background: #3b9eff;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const SaveButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
