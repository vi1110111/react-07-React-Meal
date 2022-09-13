// css
import classes from "./Card.module.css";

// Component function
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
