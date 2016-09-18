import React from 'react'
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

ReactDOM.render(<Provider store={configureStore()} key='provider'>
  {Routes()}
  </Provider>
  ,
  document.getElementById('root')
);
