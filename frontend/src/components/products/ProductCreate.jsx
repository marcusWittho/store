import React from 'react';
import styles from './ProductCreate.module.css';
import useForm from '../../hooks/useForm';

import { UserContext } from '../../UserContext';
import Input from '../forms/Input';
import Button from '../forms/Button';

function ProductCreate() {
  const productName = useForm();
  const description = useForm();
  const price = useForm();
  const [img, setImg] = React.useState({});

  const { createProduct } = React.useContext(UserContext);

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('nome_produto', productName.value);
    formData.append('descricao', description.value);
    formData.append('valor', price.value);
    formData.append('imagem', img.raw);

    await createProduct(formData);
  }

  return (
    <section className="initialAnimation createProduct">
      <h1 className="title">Cadastrar Produto</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="productName"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...productName}
        />

        <Input
          label="Descrição"
          type="text"
          name="description"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...description}
        />

        <Input
          label="Preço"
          type={Number}
          name="price"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...price}
        />

        <input
          className={styles.input}
          type="file"
          name="image"
          onChange={handleImgChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
    </section>
  );
}

export default ProductCreate;
