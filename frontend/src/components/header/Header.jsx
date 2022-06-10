import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { UserContext } from '../../UserContext';

function Header() {
  const { data, setData } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    setData(null);
    navigate('/');
  }

  return (
    <section className={`${styles.initialAnimation} ${styles.header}`}>
      <h1 className={styles.logo}>Store</h1>
      {
        data
          ? (
            <ul className={styles.navList}>
              <li><p>{data[0].nome_usuario}</p></li>
              <li>
                <button
                  className={styles.logout}
                  type="button"
                  onClick={handleClick}
                >
                  Sair
                </button>
              </li>
            </ul>
          )
          : (
            <ul className={styles.navList}>
              <li>
                <NavLink
                  className={styles.sigin}
                  to="login/create"
                >
                  Cadastrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.login}
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          )
      }
    </section>
  );
}

export default Header;
