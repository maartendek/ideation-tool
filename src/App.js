import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import Main from './components/MainComponent'

const store = ConfigureStore();


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
