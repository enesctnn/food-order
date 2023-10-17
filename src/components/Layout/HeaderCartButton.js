import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import MealContext from '../../store/meal-context';

const HeaderCartButton = () => {
  const { onCartClick } = useContext(MealContext);
  return (
    <button className={classes.button} onClick={onCartClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
