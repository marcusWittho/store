import { useState } from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha com um email válido.',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/,
    message: 'Utilize pelo menos uma letra maiúscula, uma minúscula e um número.',
  },
};

function useForm(type) {
  const [value, setValue] = useState();
  const [error, setError] = useState(null);

  function validate(toBeValidate) {
    if (type === false) return true;

    if (!toBeValidate || toBeValidate.length === 0) {
      setError('Campo obrigatório.');
      return false;
    }

    if (types[type] && !types[type].regex.test(toBeValidate)) {
      setError(types[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);

    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    validate: () => validate(value),
    onChange,
    onblur: () => validate(value),
  };
}

export default useForm;
