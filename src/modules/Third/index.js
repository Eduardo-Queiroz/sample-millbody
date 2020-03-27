import React from 'react';
import {withNavigation} from 'react-navigation';

import {SafeAreaView} from 'react-native';
import {PrimaryButton, Player} from '~/components';
import {Container, Content} from './styles';

const Third = ({navigation}) => (
  <Container>
    <SafeAreaView style={{flex: 1}}>
      <Content>
        <Player uri="https://d1rfq3h2na8ms8.cloudfront.net/editorial/2018/12-11/zB9GG6dV-medium.mp4" />
        <PrimaryButton title="Voltar" onPress={() => navigation.pop()} />
      </Content>
    </SafeAreaView>
  </Container>
);

export default withNavigation(Third);
