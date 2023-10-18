import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartOpenStatus, setCartOpenStatus] = useState(false);

  const cartClickHandler = () => {
    setCartOpenStatus(true);
  };
  const closeCartHandler = () => {
    setCartOpenStatus(false);
  };

  return (
    <React.Fragment>
      {cartOpenStatus && <Cart onClose={closeCartHandler} />}
      <Header onCartClick={cartClickHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
