import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Header} from '~/components';
import {First, Second, Third} from '~/modules';

export default mainStack = createStackNavigator({
  First: {
    screen: First,
    navigationOptions: {
      header: () => <Header theme="blue-light" title="Primeiro video" />,
    },
  },
  Second: {
    screen: Second,
    navigationOptions: {
      header: () => (
        <Header theme="blue-light" title="Segundo video" backTo="First" />
      ),
    },
  },
  Third: {
    screen: Third,
    navigationOptions: {
      header: () => (
        <Header theme="blue-light" title="Terceiro video" backTo="Second" />
      ),
    },
  },
});
