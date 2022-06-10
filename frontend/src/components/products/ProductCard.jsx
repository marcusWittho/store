import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>Imagem</div>
      <div className={styles.name}>Nome</div>
      <div className={styles.price}>Preço</div>
      <div className={styles.description}>Descrição</div>
    </div>
  );
}

export default ProductCard;
