import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxi>
                <Burger />
                <div>Builder controller</div>
            </Auxi>
        );
    }
}

export default BurgerBuilder;