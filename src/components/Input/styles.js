import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 0 10px;
  height: 46px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.5)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000;
`;
