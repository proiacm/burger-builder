import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  // Object.keys extracts keys of a given object and turns them into an array
  // then we .map() which exectutes a function on each element
  // we want to transform the igKey into an array with as many elements as we have set as the value for a given ingredient in state
  // Array() used to create a new array where the arg is the length of the given ingredient
  // .reduce() allows us to return a single value 
  // arr.concat(el) takes el and adds it to arr
  // what we will get in the end is an array with as many objects as is the value for a key in state
  // we can now use this value to write a conditional which will render a prompt if there are no ingredients added yet
  let newIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    });
  }).reduce((arr , el) => {
      return arr.concat(el)
    }, []);
  if (newIngredients.length === 0) {
    newIngredients = <p>Please start adding ingredients!</p>
  } 

  return (
      <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {newIngredients}
        <BurgerIngredient type='bread-bottom' />
      </div>
  );
}

export default burger;