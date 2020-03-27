import React from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '~/styles';
import {styles} from './styles';

const AuthLoadingNavigation = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.primaryDark, colors.primaryDarkMedium, colors.primary]}
      style={styles.container}>
      <StatusBar backgroundColor="#3d939f" barStyle="light-content" />
      <ActivityIndicator hidesWhenStopped={true} color={colors.white} />
    </LinearGradient>
  );
};

export default AuthLoadingNavigation;
