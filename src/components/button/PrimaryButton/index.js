import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '~/styles';

export default PrimaryButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.secondaryDark, colors.secondary]}
      style={styles.button}>
      <Text style={styles.buttonTxt}>{title.toUpperCase()}</Text>
    </LinearGradient>
  </TouchableOpacity>
);
