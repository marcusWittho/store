import React from 'react';
import styles from './Products.module.css';

import Header from '../header/Header';
import ProductCreate from './ProductCreate';

function Products() {
  return (
    <section className={styles.products}>
      <Header />
      <div className={styles.forms}>
        <ProductCreate />
      </div>
    </section>
  );
}

export default Products;
