import styled from 'styled-components/native';
import Input from '~/components/Input';

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
  border-radius: 10px;
`;
