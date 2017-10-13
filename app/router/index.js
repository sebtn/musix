import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from '../components/Main'
import Login from '../components/Login'
import Error from '../components/Error'
import Auth from '../components/Auth'
import ArtistsMain from '../components/ArtistsMain'
import AlbumsMain from '../components/AlbumsMain'
import TracksMain from '../components/TracksMain'
import NewReleasesMain from '../components/NewReleasesMain'

export default (
  <Router history={hashHistory}>
    <Route path='/'component={Main} >
      <IndexRoute component={Login}/>
      <Route path="/user/:accessToken/:refreshToken" component={Auth} />
      <Route path="/error/:errorMsg" component={Error} />
      <Route path="artists" component={ArtistsMain} />
      <Route path="artist/:id" component={AlbumsMain} />
      <Route path="album/:id" component={TracksMain} />
      <Route path="newReleases" component={NewReleasesMain} />
    </Route>
  </Router>
)