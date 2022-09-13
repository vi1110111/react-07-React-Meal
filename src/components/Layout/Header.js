// react
import React from "react";

// Components
import HeaderCartButton from "./HeaderCartButton";

// import image
import mealImage from "../../assets/meals.jpg";

// css
import classes from "./Header.module.css";

// Component function
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React-Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
