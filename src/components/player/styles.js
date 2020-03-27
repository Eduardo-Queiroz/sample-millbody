import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {colors, metrics} from '~/styles';

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: colors.white,
    flex: 1,
    padding: metrics.basePadding * 2,
    // paddingTop: metrics.basePadding * 3
    paddingTop: metrics.basePadding * 15,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
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
  error: {
    backgroundColor: '#000',
  },
  buffering: {
    backgroundColor: '#000',
  },
  controls: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 48,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  mainButton: {
    marginRight: 15,
  },
  duration: {
    color: '#FFF',
    marginLeft: 15,
  },
});

export default styles;
// export {Container};
