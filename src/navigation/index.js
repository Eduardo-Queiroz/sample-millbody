import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainNavigation from './MainNavigation';
import {Actions} from '~/redux/reducers/global';
import {setNavigator} from '~/lib/util';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const RootStack = createStackNavigator({
  // Start: {
  //   screen: AuthLoadingNavigation,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  Main: {
    screen: MainNavigation,
    navigationOptions: {
      header: () => null,
    },
  },
});

const Container = createAppContainer(MainNavigation);

const AppNavigator = ({globalCurrentRoute}) => {
  const getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // Dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return {
      name: route.routeName,
      params: route.params,
      stack: navigationState.key,
    };
  };

  return (
    <Container
      ref={setNavigator}
      onNavigationStateChange={(prevState, currentState) => {
        const currentScreen = getActiveRouteName(currentState);
        const prevScreen = getActiveRouteName(prevState);
        if (prevScreen.name !== currentScreen.name)
          globalCurrentRoute(currentScreen.name);
      }}
    />
  );
};
export default connect(null, dispatch => bindActionCreators(Actions, dispatch))(
  AppNavigator,
);
