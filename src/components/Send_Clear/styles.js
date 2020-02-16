import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
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

export const TextButton = styled.Text`
  color: #fff;
`;
