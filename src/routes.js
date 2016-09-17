import React from 'react'
import App from './components/app';
import Home from './components/home';
import Pages from './containers/pages';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';

export default ()=>{
    return (  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='pages' component={Pages} />
    </Route>
  </Router>);
}

