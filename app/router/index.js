import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from '../components/Main'
import Login from '../components/Login'
import Error from '../components/Error'
import Auth from '../components/Auth'
import Albums from '../components/Albums'
import ArtistsMain from '../components/ArtistsMain'



export default (
  <Router history={hashHistory}>
    <Route path='/'component={Main} >
      <IndexRoute component={Login}/>
      <Route path="/user/:accessToken/:refreshToken" component={Auth} />
      <Route path="/error/:errorMsg" component={Error} />
{/*      <Route path="/user/:accessToken/:refreshToken/albums" component={Albums} />*/}
     <Route path="artists" component={ArtistsMain} />
    </Route>
  </Router>
)