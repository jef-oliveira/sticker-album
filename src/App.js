import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

import logo from './logo.svg';
import './App.css';

function App() {
  const [userData, setUserData] = useState();

  const componentClicked = () => {
    console.log('clicked')
  };

  const responseFacebook = (response) => {
    console.log(response);
    if (response && response.status != 'unknown')
      setUserData({ 
        id: response.userID, 
        email: response.email, 
        name: response.name,
        picture: `http://graph.facebook.com/${response.userID}/picture?type=large`
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {!userData && (
          <FacebookLogin
            appId="291417558665029"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
          />
        )}

        {!!userData && (
          <div onClick={() => setUserData()}>
            <img src={userData.picture} />
            {userData.name}
            {userData.email}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
