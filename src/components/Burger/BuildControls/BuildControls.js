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
      {controls.map(crtl => (
        <BuildControl key={crtl.label} label={crtl.label} />
      ))}
    </div>
);

export default buildControls;