import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify'
import SpotifyWebAPI from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebAPI();


function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      setToken(_token);

      //interact b/w our localhost and spotifyAPI
      spotify.setAccessToken(_token);

      spotify.getMe().then(user) ; {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      };
    }


    console.log("I HAVE A TOKEN", token)
  }, []);
 
  //if we log in to Spotify and token is returned then we get the statement or we get the login page
  return (
    <div className="App">
    {
      token ? (
        <Player spotify={spotify} />
      //turnary operator
      ) : (
        <Login/>
      )
    }
      <p id="p1">This app is made in the memory of Zorro</p>
      
    </div>

  );
}

export default App;