import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updateCount = oldCount + 1

    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updateCount
    this.setState({ingredients: updatedIngredients})
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updateCount = oldCount - 1

    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updateCount
    this.setState({ingredients: updatedIngredients})
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls 
          ingredientsAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder
