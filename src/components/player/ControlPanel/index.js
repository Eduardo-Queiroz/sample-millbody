import React, {useState, useMemo, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from 'react-native-progress/Bar';

import {
  View,
  Text,
  SafeAreaView,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {PrimaryButton} from '~/components';
import styles from './styles';

const secondsToTime = time =>
  ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);

export default ControlPanel = () => {
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  let player;

  const handleMainButtonTouch = () => {
    if (progress >= 1) player.seek(0);

    setPaused(!paused);
  };

  const handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * duration;
    player.seek(progress);
  };

  const onProgress = progress => {
    setProgress(progress.currentTime / duration);
  };

  const onEnd = () => {
    setPaused(true);
  };

  const onLoad = meta => {
    setDuration(meta.duration);
  };

  const ref = _ref => {
    player = _ref;
  };

  const ControlPanel = props => {
    return (
      props.isVisible && (
        <View style={styles.controls}>
          <TouchableWithoutFeedback
            onPress={handleMainButtonTouch}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <Icon name={!paused ? 'pause' : 'play'} size={30} color="#FFF" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleProgressPress}>
            <View>
              <ProgressBar
                progress={progress}
                color="#FFF"
                unfilledColor="rgba(255,255,255,.5)"
                borderColor="#FFF"
                width={250}
                height={20}
              />
            </View>
          </TouchableWithoutFeedback>

          <Text style={styles.duration}>
            {secondsToTime(Math.floor(progress * duration))}
          </Text>
        </View>
      )
    );
  };

  return {
    ControlPanel,
    controlConfig: {paused, onLoad, onProgress, onEnd, ref},
  };
};
