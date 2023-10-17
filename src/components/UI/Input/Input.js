import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* if prop.input has {type:'text'} it will be added*/}
      <input id={props.input.id} {...props.input} />
    </div>
  );
};

export default Input;
