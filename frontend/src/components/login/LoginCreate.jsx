import React from 'react';
import styles from './LoginCreate.module.css';
import useForm from '../../hooks/useForm';

import { UserContext } from '../../UserContext';
import Input from '../forms/Input';
import Button from '../forms/Button';

function LoginCreate() {
  const username = useForm();
  const typeUser = useForm();
  const userEmail = useForm();
  const password = useForm();

  const { createUser } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      nome_usuario: username.value,
      tipo_usuario: typeUser.value,
      email: userEmail.value,
      password: password.value,
    };

    if (userEmail.validate() && password.validate()) {
      await createUser(newUser);
    }
  }

  return (
    <section className="initialAnimation createForm">
      <h1 className="title">Cadastrar</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="username"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...username}
        />

        <Input
          label="Tipo do usuário"
          type="text"
          name="typeUser"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...typeUser}
        />

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

        <Button type="submit">Cadastrar</Button>
      </form>
    </section>
  );
}

export default LoginCreate;
