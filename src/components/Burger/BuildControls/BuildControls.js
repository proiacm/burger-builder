import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (

  // map each control from const above into BuildControl component as a prop 
    <div className={classes.BuildControls}>
      <p>Total: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)} //passing the type as arg for handler
          removed={()=> props.ingredientRemoved(ctrl.type)} //passing the type as arg for handler
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button className={classes.OrderButton}>Order Now!</button>
    </div>
);

export default buildControls;