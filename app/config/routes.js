import React from 'react';
import ReactRouter from 'react-router';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Main} from '../components/main.js';
import {Home} from '../components/home.js';

export const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
