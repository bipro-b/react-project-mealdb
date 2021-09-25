import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Food.css';


const Food = (props) => {
    const { strMeal, strCategory, strMealThumb } = props.meal;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    return (
        <div className="food_container">
            <div className="card h-100 mx-2 food">
                <h3>{strMeal}</h3>
                <h3>{strCategory}</h3>
                <img src={strMealThumb} className="img-fluid " alt="" />
                <button onClick={() => props.handleChange(props.meal.strMeal)} className="btn text-succes bg-primary w-50 text-center mx-auto">

                    {cartIcon}Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Food;