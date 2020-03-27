import React from 'react';
import {withNavigation} from 'react-navigation';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {PrimaryButton, Player} from '~/components';
import {Container, Content} from './styles';
import {navigateReplace} from '~/lib/util';

const First = ({navigation}) => {
  const currentRoute = useSelector(({global}) => global.currentRoute);
  return (
    <Container>
      <SafeAreaView style={{flex: 1}}>
        <Content>
          <Player
            uri="https://d1rfq3h2na8ms8.cloudfront.net/editorial/2018/12-11/Rn8KKQBy-medium.mp4"
            currentRoute={currentRoute}
          />
          <PrimaryButton
            title="Proximo video"
            onPress={() => navigateReplace('Second')}
          />
        </Content>
      </SafeAreaView>
    </Container>
  );
};
export default withNavigation(First);
