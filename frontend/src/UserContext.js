import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { CREATE_USER, LOGIN_USER } from './api';

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function loginUser(email, password) {
    try {
      setError(null);
      const { url, options } = LOGIN_USER({ email, password });
      const response = await fetch(url, options);

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const userJson = await response.json();

      if (userJson.statusCode === 400) {
        setError(userJson.message);
        throw new Error(userJson.message);
      }

      setData(userJson);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  async function createUser(newUser) {
    try {
      setError(null);
      const { url, options } = CREATE_USER(newUser);
      const response = await fetch(url, options);

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const userJson = await response.json();
      console.log('UserContext: ', userJson);

      return userJson;
    } catch (err) {
      return setError(err.message);
    }
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    data,
    setData,
    error,
    loginUser,
    createUser,
  };

  return (
    <UserContext.Provider value={context}>
      { children }
    </UserContext.Provider>
  );
}

UserStorage.defaultProps = { children: {} };

UserStorage.propTypes = {
  children: PropTypes.objectOf(PropTypes.shape),
};
