import React from 'react';
import {withNavigation} from 'react-navigation';

import {SafeAreaView} from 'react-native';
import {PrimaryButton, Player} from '~/components';
import {Container, Content} from './styles';
import {navigateReplace} from '~/lib/util';

const Second = ({navigation}) => (
  <Container>
    <SafeAreaView style={{flex: 1}}>
      <Content>
        <Player uri="https://d1rfq3h2na8ms8.cloudfront.net/editorial/2018/12-11/X4W11rnR-medium.mp4" />
        <PrimaryButton
          title="Proximo video"
          onPress={() => navigateReplace('Third')}
        />
      </Content>
    </SafeAreaView>
  </Container>
);

export default withNavigation(Second);
