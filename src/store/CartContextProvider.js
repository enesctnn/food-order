import React, { useEffect, useState } from 'react';
import { CartContext } from './cart-context';

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const item of items) {
      total += (item.amount * (item.price * 100)) / 100;
    }
    setTotalAmount(total);
  }, [items, setItems]);

  const addItemToCartHandler = (meal, amount) => {
    let matchingItem;
    for (const item of items) {
      if (item.id === meal.id) {
        matchingItem = item;
      }
    }
    if (matchingItem) {
      matchingItem.amount += Number(amount);
      setItems((prevItems) => {
        return [...prevItems];
      });
    } else {
      setItems((prevCart) => {
        return [
          ...prevCart,
          {
            ...meal,
            amount: +amount,
          },
        ];
      });
    }
  };

  const removeItemFromCartHandler = (id) => {
    let matchingItem;
    for (const item of items) {
      if (item.id === id) {
        matchingItem = item;
      }
    }
    if (matchingItem) {
      if (matchingItem.amount === 1) {
        const updatedItem = items.filter((item) => {
          return item.id !== id;
        });
        setItems(updatedItem);
      } else {
        matchingItem.amount--;
        setItems((prevItems) => {
          return [...prevItems];
        });
      }
    }
  };

  const cartContext = {
    items,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
