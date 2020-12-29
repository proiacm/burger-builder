import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  // Object.keys extracts keys of a given object and turns them into an array
  // then we .map() which exectutes a function on each element
  // we want to transform the igKey into an array with as many elements as we have set as the value for a given ingredient in state
  // Array() used to create a new array where the arg is the length of the given ingredient
  const newIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    });
  });

  return (
      <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {newIngredients}
        <BurgerIngredient type='bread-bottom' />
      </div>
  );
}

export default burger;