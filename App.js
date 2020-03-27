import React from 'react';
import {Provider} from 'react-redux';
import OfflineNotice from '~/components/offlineNotice';
import {store} from '~/redux/store';
import Navigator from '~/navigation';

const App = () => (
  <Provider store={store}>
    <Navigator />
    <OfflineNotice />
  </Provider>
);

export default App;
