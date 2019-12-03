import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import NavigationService from './src/services/navigation';
import Routes from './src/routes';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
