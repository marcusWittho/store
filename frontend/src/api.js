export const API_USER = 'http://localhost:3000/user';
export const API_PRODUCT = 'http://localhost:3000/product';

export function LOGIN_USER(loginInfo) {
  return {
    url: `${API_USER}/login`,
    options: {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(loginInfo),
    },
  };
}

export function CREATE_USER(newUser) {
  return {
    url: `${API_USER}/add`,
    options: {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    },
  };
}

export function CREATE_PRODUCT(newProduct) {
  return {
    url: `${API_PRODUCT}/add`,
    options: {
      method: 'POST',
      body: newProduct,
    },
  };
}
