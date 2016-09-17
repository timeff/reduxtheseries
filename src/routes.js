import React from 'react'
//Components
import App from './components/app';
import Home from './components/home';

//Containers
import Pages from './containers/Pages';
import ShowPageContainer from './containers/Pages/show'


import {Router,Route,IndexRoute,browserHistory} from 'react-router';

export default ()=>{
    return (  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='pages'>
        <IndexRoute component={Pages} />
        <route path=':id' component={ShowPageContainer} />
      </Route>
    </Route>
  </Router>);
}

