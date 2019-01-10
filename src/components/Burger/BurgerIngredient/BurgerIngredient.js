import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className="BreadBottom"></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className='BreadTop'>
                        <div className={BurgerIngredient.Seeds1}></div>
                        <div className={BurgerIngredient.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={BurgerIngredient.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={BurgerIngredient.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={BurgerIngredient.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={BurgerIngredient.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;

    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;