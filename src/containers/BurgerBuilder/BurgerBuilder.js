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
    totalPrice : 0,
    purchasable: false
  }

  // will add sum of ingredients and change purchasable to true if sum > 0
  // will be used in add && remove IngredientHandlers
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey];
    }).reduce((sum, el) => {
      return sum + el
    }, 0);
    this.setState({purchasable: sum > 0})
  };

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
    this.updatePurchaseState(updatedIngredients);
  }

   // receives type of ingredient being added 
  removeIngredientHandler = (type) => {
    //update to ingredient count
    const prevCount = this.state.ingredients[type];
    // prevent error from value going negative 
    if (prevCount <= 0) {
      return;
    }
    const updatedCount = prevCount - 1;
    // state should be update in an immutable way: spread operator distributes props of old ingredient state into new object being created
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    // update to total price
    const priceDeduction = INGREDIENT_PRICES[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  }

  render() {

    // disable button based on value 
    const disableBtn = {
      ...this.state.ingredients
    };
    for (let key in disableBtn) {
      disableBtn[key] = disableBtn[key] <= 0
    }; 
    // {salad: true, meat: false, ...}

    return (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disableBtn}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
          />
        </Aux>
    );
  }
}

export default BurgerBuilder;