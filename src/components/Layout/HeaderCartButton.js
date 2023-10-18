import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timeId = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timeId);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onCartClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
