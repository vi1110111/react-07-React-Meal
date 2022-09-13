// ract
import React from "react";

// Components
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

// Component function
const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
