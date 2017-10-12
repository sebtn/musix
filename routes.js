'use strict';

const Spotify = require('spotify-web-api-node')
const querystring = require('querystring')
const express = require('express')
const router = new express.Router()

// configure the express server
const CLIENT_ID = '28d30630ee9a48669523a79f38770105'
// const CLIENT_ID = process.env.client_id
const CLIENT_SECRET = '031469a349c54d10a4134bc5c8963c92'
// const CLIENT_SECRET = process.env.client_secret
// const REDIRECT_URI = process.env.redirect_uri || 'http://localhost:3000/callback'
// const REDIRECT_URI =  'http://localhost:3000/callback/'
const REDIRECT_URI  = 'https://aqueous-brook-79722.herokuapp.com/callback/''

const STATE_KEY = 'spotify_auth_state'
// requests authorization
const scopes = ['user-read-private', 'user-read-email']

// configure spotify
const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
})

/** Generates a random string containing numbers and letters of N characters */
const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2)

/**
 * The /login route
 * Redirect the client to the spotify authorize url, 
 * but first set that user's state in the cookie.
 */
router.get('/login', (_, res) => {
  const state = generateRandomString(16)
  res.cookie(STATE_KEY, state)
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state))
})

/**
 * The /callback route - after the user logs in to spotifyApi
 * defined by spotify, checks that the state of the cookie matches 
 * the state in the query parameter. 
 */
router.get('/callback', (req, res) => {
  const { code, state } = req.query
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null
  if (state === null || state !== storedState) {
    res.redirect('/#/error/state mismatch')
  /* get the authorization code and  
   pass it on to the client */
  } else {
    res.clearCookie(STATE_KEY)
    // Get access token and a refresh token
    spotifyApi.authorizationCodeGrant(code).then(data => {
      const { expires_in, access_token, refresh_token } = data.body

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(access_token)
      spotifyApi.setRefreshToken(refresh_token)

      // use the access token to access the Spotify Web API
      spotifyApi.getMe().then(({ body }) => {
        console.log(body)
      })
      // pass the token to the browser to make requests from there
      res.redirect(`/#/user/${access_token}/${refresh_token}`)
    }).catch(err => {
      res.redirect('/#/error/invalid token')
    })
  }
})

module.exports = router
