import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
`;
export const ContainerText = styled.View`
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;
export const ContainerPai = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
`;
export const TextInfo = styled.Text`
  font-size: 14px;
  color: #000;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Versiculo = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;

export const ButtonVolter = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100px;
  font-weight: bold;
  margin-top: 20px;

  background-color: #3b9eff;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;
