import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Dashboard />
    </Provider>
  );
};

export default App;
