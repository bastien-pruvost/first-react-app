import { useState } from 'react';
import logo from 'assets/logo.png';
import Banner from 'components/Banner';
import Cart from 'components/Cart';
import ShoppingList from 'components/ShoppingList';
import Footer from 'components/Footer';
import 'styles/Layout.css';

const App = () => {
  const [cart, updateCart] = useState([]);

  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
