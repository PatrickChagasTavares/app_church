import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 0 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const SaveButton = styled(Button)`
  width: 200;
  margin-bottom: 10px;
`;
export const SaveDataButton = styled(Input)`
  margin-bottom: 10px;
`;
