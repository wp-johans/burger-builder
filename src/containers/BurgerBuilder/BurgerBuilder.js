import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 5.5,
    bacon: 10.5,    
    cheese: 7,            
    meat: 20
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,            
            meat: 0
        },
        totalPrice: 20
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount = oldCount;

        const priceReduction = INGREDIENT_PRICES[type];
        let newPrice = this.state.totalPrice;

        if (oldCount > 0)
        {
            updatedCount = oldCount - 1;
            newPrice = newPrice - priceReduction;
        }

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }
    
    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <p>Total price: {this.state.totalPrice} SEK</p>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} />
            </Auxi>
        );
    }
}

export default BurgerBuilder;