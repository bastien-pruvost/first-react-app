import { useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const monsteraPrice = 8;
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className='lmj-cart'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      <ul>
        <li>
          <h3>Monstera : {monsteraPrice}€</h3>
          <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
        </li>
      </ul>
      <h3>Total : {monsteraPrice * cart}€</h3>
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le panier
      </button>
    </div>
  );
};

export default Cart;
