// react
import { useContext, useEffect, useState } from "react";

// Components
import CartIcon from "../Cart/CartIcon";

// Context
import CartContext from "../../store/cart-context";

// css
import classes from "./HeaderCartButton.module.css";

// Component function
const HeaderCartButton = (props) => {
  const [btnAmination, setBtnAmination] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return (cur += item.amount);
  }, 0);

  const { items } = cartCtx;
  const btnClasses = `${classes.button} ${btnAmination ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAmination(true);

    const timer = setTimeout(() => {
      setBtnAmination(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
