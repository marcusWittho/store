import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Login.module.css';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';

function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
