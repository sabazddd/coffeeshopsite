import React from 'react';
import styles from './CartPage.module.css';

function CartPage({ initialItems = [], handleRemove }) {
  const items = initialItems;

  const totalPrice = items.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);

  if (items.length === 0) {
    return (
      <section className={styles.cartPage}>
        <h2 className={styles.heading}>Your Cart is Empty 😔</h2>
        <p className={styles.emptyMessage}>Add some products to your cart!</p>
      </section>
    );
  }

  return (
    <section className={styles.cartPage}>
      <h2 className={styles.heading}>Your Shopping Cart</h2>
      <table className={styles.cartTable} aria-label="Shopping cart table">
        <thead className={styles.cartTableThead}>
          <tr>
            <th className={styles.cartTableTh}>Product</th>
            <th className={`${styles.cartTableTh} ${styles.priceTh}`}>Price</th>
            <th className={`${styles.cartTableTh} ${styles.quantityTh}`}>Quantity</th>
            <th className={`${styles.cartTableTh} ${styles.totalTh}`}>Total</th>
            <th className={styles.cartTableTh}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, price, quantity }) => (
            <tr key={id} className={styles.cartTableTr + ' ' + styles.cartTableTrHover}>
              <td className={styles.cartTableTd} data-label="Product">{name || 'Unknown Item'}</td>
              <td className={`${styles.cartTableTd} ${styles.price}`} data-label="Price">${(price || 0).toFixed(2)}</td>
              <td className={`${styles.cartTableTd} ${styles.quantity}`} data-label="Quantity">{quantity || 0}</td>
              <td className={`${styles.cartTableTd} ${styles.total}`} data-label="Total">${((price || 0) * (quantity || 0)).toFixed(2)}</td>
              <td className={`${styles.cartTableTd} ${styles.action}`} data-label="Action">
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemove(id)}
                  aria-label={`Remove ${name || 'item'} from cart`}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className={styles.cartTableTfootTd} style={{ textAlign: 'right' }}>Total:</td>
            <td className={`${styles.cartTableTfootTd} ${styles.total}`}>${totalPrice.toFixed(2)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CartPage;
