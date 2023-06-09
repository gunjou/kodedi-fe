import { useState } from 'react';

function UseToken () {

    function getToken() {
        const userToken = localStorage.getItem('token');
        return userToken && userToken
    }

    const [token, setToken] = useState(getToken());

    function saveToken(userToken) {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    }

    function removeToken() {
        localStorage.removeToken('token');
        setToken(null);
    }

  return {
    setToken: saveToken,
    token,
    removeToken
  }
}

export default UseToken