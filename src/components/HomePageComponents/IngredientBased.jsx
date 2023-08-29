import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: rgb(252, 251, 244, 0.95);
    border-radius: 5px;
    padding: 30px 10px 28px 10px;
    margin-top: 13px;
`;

const UserTextArea = styled.textarea`
    width: 90%;
    height: 65px;
    resize: none;
    background: none;
    font-family: sans-serif;
    font-size: 94%;
    color: rgb(40, 40, 40);
    margin: 0 0 6px 5px;
    letter-spacing: 0.02rem;
    background-color: white;
    border-radius: 3px;
    padding: 11px 10px; 
    border: ${props =>
        props.isValid
        ? '1.5px solid #D21404'
        : 'none'};
    line-height: 1.4;

    &:focus {
        outline: none;
    }
`;

const ButtonWrapper = styled.div`
    margin: 25px 0 2px 5px;
`;

const GenerateButton = styled.button`
    font-family: 'Domine', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
    padding: 7px 12px;
    border-radius: 5px;
    border: 1px solid gray;
    transition: all 0.2s ease-in-out;
    color: rgb(40, 40, 40);
    background: linear-gradient(to left, rgb(239,239,239) 50%, rgb(58, 58, 58, 0.85) 50%) right;
    background-size: 200% 100%;

    &:hover {
        cursor: pointer;
        background-position: left;
        color: rgb(245, 245, 245);
    }
`;

const ErrorMessage = styled.div`
    color: #D21404;
    font-size: 0.7rem;
    padding: 0 0 2px 5px;
`;

const IngredientBased = ({ setMeals }) => {

    const [ingredientsToSearchFor, setIngredientsToSearchFor] = useState('');
    const [showIngredientsError, setShowIngredientsError] = useState(false);
    const errorMessage = "This is a required field";

    const handleIngredientsChange = (event) => {
        const ingredients = event.target.value;
        setIngredientsToSearchFor(ingredients);
    }

    const customIncludes = (haystack, needle) => {
        return haystack.toLowerCase().includes(needle.toLowerCase());
    };

    const handleButtonClick = () => {
        if (ingredientsToSearchFor === '') {
            setShowIngredientsError(true);
        } else {
            setShowIngredientsError(false);
            const searchIngredients = ingredientsToSearchFor.split("\n").map(ingredient => ingredient.trim());
            const meals = JSON.parse(localStorage.getItem("meals"));

            const matchingRecipes = meals.filter(meal =>
                meal.ingredients.some(ingredient =>
                    searchIngredients.some(searchIngredient =>
                        customIncludes(ingredient, searchIngredient)
                    )
                )
            );

            setMeals(matchingRecipes);
        }
    }

  return (
    <Container>
        <UserTextArea
            placeholder='Ingredients to include, each separated by a new line ...'
            value={ingredientsToSearchFor}
            isValid={showIngredientsError}
            onChange={handleIngredientsChange} />
        {showIngredientsError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <ButtonWrapper>
            <GenerateButton onClick={handleButtonClick}>
                Generate
            </GenerateButton>
        </ButtonWrapper>
    </Container>
  )
}

export default IngredientBased