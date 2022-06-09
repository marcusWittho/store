import React from 'react';
import styles from './LoginForm.module.css';
import useForm from '../../hooks/useForm';

import { UserContext } from '../../UserContext';
import Input from '../forms/Input';
import Button from '../forms/Button';

function LoginForm() {
  const userEmail = useForm();
  const password = useForm();

  const { loginUser } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (userEmail.validate() && password.validate()) {
      await loginUser(userEmail.value, password.value);
    }
  }

  return (
    <section className="initialAnimation loginForm">
      <h1 className="title">Login</h1>

      <form className={styles.form} submit={handleSubmit}>
        <Input
          label="Email"
          type="text"
          name="userEmail"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...userEmail}
        />

        <Input
          label="Senha"
          type="password"
          name="password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...password}
        />

        <Button type="submit">Entrar</Button>
      </form>
    </section>
  );
}

export default LoginForm;
