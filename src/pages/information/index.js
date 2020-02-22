import React from 'react';

import {
  Container,
  ContainerText,
  ContainerPai,
  Title,
  TextInfo,
  Versiculo,
  ButtonVolter,
  TextButton,
} from './styles';
import Background from '~/components/background';

export default function information({navigation}) {
  return (
    <Background>
      <Container>
        <Title>Tela de ajuda</Title>
        <ContainerPai>
          <ContainerText>
            <TextInfo>O que é Jesus para voce? </TextInfo>
            <Versiculo>Ler João 14:06</Versiculo>
          </ContainerText>
          <ContainerText>
            <TextInfo>O que você acha sobre o Céus e o Inferno? </TextInfo>
            <Versiculo>Ler João 14:02 e Mateus 10:28</Versiculo>
          </ContainerText>
          <ContainerText>
            <TextInfo>
              Se você morresse hoje e chegasse diante de Deus e Ele lhe
              pergutasse: Porque devo deixar você entrar no Céu? Qual seria a
              sua Resposta?
            </TextInfo>
            <Versiculo>Ler João 1:12</Versiculo>
          </ContainerText>

          <ButtonVolter onPress={() => navigation.navigate('Door')}>
            <TextButton>Voltar</TextButton>
          </ButtonVolter>
        </ContainerPai>
      </Container>
    </Background>
  );
}
