import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  /* margin: 50px 0 0 0; */
`;

export const Logo = styled.View`
  margin-top: 30px;
`;

export const Form = styled.View`
  margin-top: 30px;
  padding: 0 40px;
`;

export const InputTotal = styled(Input)`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
export const InputNote = styled(Input)`
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40%;
  font-weight: bold;

  background-color: #3b9eff;
  border-radius: 10px;
`;
export const CancelButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40%;
  font-weight: bold;

  background-color: #f00;
  border-radius: 10px;
`;
