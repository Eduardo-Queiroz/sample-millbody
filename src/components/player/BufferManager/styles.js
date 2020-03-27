import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {colors, metrics} from '~/styles';

const styles = StyleSheet.create({
  videoCover: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255, .9)',
  },
  buffering: {
    backgroundColor: '#000',
  },
});

export default styles;
// export {Container};
