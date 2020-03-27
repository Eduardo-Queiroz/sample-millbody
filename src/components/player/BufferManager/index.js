import React, {useState} from 'react';
import {colors} from '~/styles';

import {View, Animated, ActivityIndicator} from 'react-native';
import styles from './styles';

export default useBufferManager = () => {
  const [animated, setAnimated] = useState(new Animated.Value(0));
  const [buffering, setBuffering] = useState(true);
  let loopingAnimation;

  const triggerBufferAnimation = () => {
    loopingAnimation && loopingAnimation.stopAnimation();
    loopingAnimation = Animated.loop(
      Animated.timing(animated, {
        toValue: 1,
        duration: 350,
      }),
    ).start();
  };

  const onLoadStart = () => {
    triggerBufferAnimation();
  };

  const onBuffer = meta => {
    meta.isBuffering && triggerBufferAnimation();

    // if (loopingAnimation && !meta.isBuffering) {
    //   loopingAnimation.stopAnimation();
    // }

    setBuffering(meta.isBuffering);
  };

  const interpolatedAnimation = animated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateStyle = {
    transform: [{rotate: interpolatedAnimation}],
  };

  const BufferPanel = () =>
    buffering && (
      <View style={styles.videoCover}>
        <Animated.View style={rotateStyle}>
          <ActivityIndicator hidesWhenStopped={true} color={colors.white} />
        </Animated.View>
      </View>
    );

  return {
    BufferPanel,
    bufferConfig: {
      onLoadStart,
      onBuffer,
    },
    buffering,
  };
};
