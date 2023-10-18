import classses from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li className={classses.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classses.description}>{meal.description}</div>
        <div className={classses.price}>{price}</div>
      </div>
      <div>
        <MealItemForm meal={meal} />
      </div>
    </li>
  );
};

export default MealItem;
