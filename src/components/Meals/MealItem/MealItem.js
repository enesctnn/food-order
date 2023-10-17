import classses from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className={classses.meal}>
        <h3>{props.name}</h3>
        <div className={classses.description}>{props.description}</div>
        <div className={classses.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
