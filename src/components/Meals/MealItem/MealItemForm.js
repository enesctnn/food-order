import { useRef, useContext } from 'react';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  const { cartItemHandler } = useContext(CartContext);

  const submitHandler = (event, meal, amount) => {
    event.preventDefault();
    cartItemHandler(meal, amount);
  };

  const amountInputRef = useRef();

  const inputValue = () => amountInputRef.current.value;

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.meal.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          ref: amountInputRef,
        }}
      />
      <button
        onClick={(event) => {
          submitHandler(event, props.meal, inputValue());
        }}
      >
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
