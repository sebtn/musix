import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from '../components/Main'
import Login from '../components/Login'


export default (
  <Router history={hashHistory}>
    <Route path='/'component={Main} >
      <IndexRoute component={Login}/>
    </Route>
  </Router>
)