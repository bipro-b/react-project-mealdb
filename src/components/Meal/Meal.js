import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Meal.css'

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const [name, setName] = useState("ME");
    const [show, setShow] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals)
                setName(data.meals.strMeal)
                setShow(data.meals)
            })
    }, [])

    const handleChange = (mealName) => {
        let addedName = [mealName]
        setName(addedName);

    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProduts = meals.filter(product => product.strMeal.toLowerCase().includes(searchText.toLowerCase()));

        setShow(matchProduts);

    }

    return (
        <>
            <div className="search-field">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Enter food name" />
            </div>
            <div className="container row mt-5">

                <div className="Meal col-10 ">

                    <div className="Meal row row-cols-md-3 row-cols-1 gy-2 alignment-center">
                        {
                            show.map(meal => <Food key={meal.idMeal} handleChange={handleChange} meal={meal}></Food>)
                        }
                    </div>
                </div>

                <div className="col-2">
                    <Cart name={name} ></Cart>
                </div>
            </div>
        </>
    );
};

export default Meal;