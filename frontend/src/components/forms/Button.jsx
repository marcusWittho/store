import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, condition, ...props }) {
  return (
    <button
      className={styles.button}
      type={condition ? 'button' : 'submit'}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      { children }
    </button>
  );
}

Button.defaultProps = {
  children: '',
  condition: 'submit',
};

Button.propTypes = {
  children: PropTypes.string,
  condition: PropTypes.string,
};

export default Button;
