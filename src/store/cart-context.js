import React, { useState } from 'react';

export const CartContextProvider = (props) => {

  const [cartItems, setCartItems] = useState([]);

  const cartItemHandler = (meal, amount) => {
    setCartItems((prevCart) => {
      return [
        ...prevCart,
        {
          ...meal,
          amount,
        },
      ];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

const CartContext = React.createContext({
  cartItems: [],
  cartItemHandler: (meal, amount) => {},
});

export default CartContext;
