import React, {useState, useEffect} from 'react';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';

import {View} from 'react-native';
import useBufferManager from './BufferManager';
import useErrorManager from './ErrorManager';
import useControlManager from './ControlPanel';
import styles from './styles';

export default Player = ({uri}) => {
  const {BufferPanel, bufferConfig, buffering} = useBufferManager();
  const {ErrorPanel, errorConfig, error} = useErrorManager();
  const {ControlPanel, controlConfig} = useControlManager();

  return (
    <View style={styles.textContainer}>
      <Video
        source={{
          uri,
        }}
        style={styles.backgroundVideo}
        {...errorConfig}
        {...bufferConfig}
        {...controlConfig}
      />

      <ControlPanel isVisible={!buffering && !error} />
      <BufferPanel />
      <ErrorPanel />
    </View>
  );
};
