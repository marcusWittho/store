import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LOGIN_USER } from './api';

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function loginUser(email, password) {
    try {
      const { url, options } = LOGIN_USER({ email, password });
      const response = await fetch(url, options);

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      setData(response);
    } catch (err) {
      setError(err.message);
    }
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = {
    data,
    error,
    loginUser,
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
