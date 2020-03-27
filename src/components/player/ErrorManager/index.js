import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, Text} from 'react-native';

import styles from './styles';

export default ErrorManager = () => {
  const [error, setError] = useState('');

  const onError = meta => {
    const {
      error: {code},
    } = meta;

    let error = 'An error has occurred playing this video';
    switch (code) {
      case -11800:
        error = 'Could not load video from URL';
        break;
    }

    setError(error);
  };

  const ErrorPanel = () =>
    !!error && (
      <View style={styles.videoCover}>
        <Icon name="exclamation-triangle" size={30} color="red" />
        <Text>{error}</Text>
      </View>
    );
  return {ErrorPanel, errorConfig: {onError}, error};
};
