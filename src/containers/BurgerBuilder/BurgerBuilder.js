import React, {Component} from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';

// all caps for global const
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  meat: 1.3,
  bacon: 1
}

class BurgerBuilder extends Component {

  state = {
    ingredients : {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice : 0
  }

  // receives type of ingredient being added 
  addIngredientHandler = (type) => {
    // update to ingredient count
    const prevCount = this.state.ingredients[type];
    const updatedCount = prevCount + 1;
    // state should be update in an immutable way: spread operator distributes props of old ingredient state into new object being created
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    // update to total price
    const priceAddition = INGREDIENT_PRICES[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }

  removeIngredientHandler = (type) => {

  }

  render() {
    return (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls 
            ingredientAdded={this.addIngredientHandler}/>
        </Aux>
    );
  }
}

export default BurgerBuilder;