import React, { useState, useEffect } from 'react';

export const MealContextProvider = (props) => {
  const [cartOpenStatus, setCartOpenStatus] = useState(false);

  const cartClickHandler = () => {
    setCartOpenStatus(true);
  };
  const closeCartHandler = () => {
    setCartOpenStatus(false);
  };

  return (
    <MealContext.Provider
      value={{
        cartOpenStatus,
        onCartClick: cartClickHandler,
        onCloseCart: closeCartHandler,
      }}
    >
      {props.children}
    </MealContext.Provider>
  );
};

const MealContext = React.createContext({
  onCartClick: () => {},
  onCloseCart: () => {},
});

export default MealContext;
