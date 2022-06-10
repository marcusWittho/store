export const API_URL = 'http://localhost:3000/user';

export function LOGIN_USER(loginInfo) {
  return {
    url: `${API_URL}/login`,
    options: {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(loginInfo),
    },
  };
}

export function CREATE_USER(newUser) {
  return {
    url: `${API_URL}/add`,
    options: {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    },
  };
}
