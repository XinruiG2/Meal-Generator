import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: rgb(252, 251, 244, 0.95);
    border-radius: 3px;
    padding: 20px 10px;
    padding-bottom: 14px;
    margin-top: 13px;
`;

const Header = styled.div`
    font-family: 'Domine', sans-serif;
    color: rgb(60, 60, 60, 0.95);
    font-size: 1.15rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 600;
    margin: 3px 0 20px 5px;
`;

const InputContainer = styled.div`
    margin-bottom: 15px;
`;

const UserInput = styled.input`
    border: none;
    width: 68%;
    height: 33px;
    background: none;
    padding: 0;
    font-size: 92%;
    color: rgb(40, 40, 40);
    margin: 0 0 12px 7px;
    letter-spacing: 0.02rem;
    border-bottom: ${props =>
        props.isValid
        ? '1.5px solid #D21404'
        : '1.5px solid rgb(110, 110, 110, 0.75)'};

    &:focus {
        outline: none;
    }
`;

const UserTextArea = styled.textarea`
    width: 90%;
    height: 65px;
    resize: none;
    background: none;
    font-family: sans-serif;
    font-size: 92%;
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
    margin: 26px 0 14px 5px;
`;

const CreateButton = styled.button`
    font-family: 'Domine', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    padding: 6.5px 12px;
    border-radius: 5px;
    border: 1.5px solid #949494;
    transition: all 0.2s ease-in-out;
    color: black;
    font-weight: 600;
    background: linear-gradient(to left, rgb(58, 58, 58, 0.25) 50%, rgb(58, 58, 58, 0.85) 50%) right;
    background-size: 200% 100%;

    &:hover {
        cursor: pointer;
        background-position: left;
        color: white;
    }
`;

const ErrorMessage = styled.div`
    color: #D21404;
    font-size: 0.7rem;
    padding: 0 0 2px 5px;
`;

const AddRecipe = () => {

    const [recipeName, setRecipeName] = useState('');
    const [showNameError, setShowNameError] = useState(false);
    const [ingredients, setIngredients] = useState('');
    const [showIngredientsError, setShowIngredientsError] = useState(false);
    const [steps, setSteps] = useState('');
    const [showStepsError, setShowStepsError] = useState(false);
    const errorMessage = "This is a required field";
    let recipeObject;

    const handleNameChange = (event) => {
        const name = event.target.value;
        setRecipeName(name);
    };

    const handleIngredientsChange = (event) => {
        const ingredients = event.target.value;
        setIngredients(ingredients);
    };

    const handleStepsChange = (event) => {
        const steps = event.target.value;
        setSteps(steps);
    };

    const handleButtonClick = () => {
        if (recipeName === '') {
            setShowNameError(true);
        }
        if (ingredients === '') {
            setShowIngredientsError(true);
        }
        if (steps === '') {
            setShowStepsError(true);
        }
        if (!showNameError && !showIngredientsError && !showStepsError) {
            setShowNameError(false);
            setShowIngredientsError(false);
            setShowStepsError(false);
            const ingredientsAsArray = ingredients.split("\n");
            const stepsAsArray = steps.split("\n");
            recipeObject = {
                name: recipeName,
                ingredients: ingredientsAsArray,
                instructions: stepsAsArray
            }
            const meals = JSON.parse(localStorage.getItem("meals"));
            const updatedMeals = [...meals, recipeObject];
            localStorage.setItem("meals", JSON.stringify(updatedMeals));
            setRecipeName('');
            setIngredients('');
            setSteps('');
        }
    }

  return (
    <Container>
        <Header>Custom Recipe ✧ ‧˚</Header>
        <InputContainer>
            <UserInput
                placeholder="Recipe name" 
                onChange={handleNameChange}
                isValid={showNameError} />
            {showNameError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
            <UserTextArea
                placeholder="Ingredients, each one on a new line" 
                onChange={handleIngredientsChange}
                isValid={showIngredientsError} />
            {showIngredientsError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
            <UserTextArea
                placeholder="Recipe steps, each one on a new line" 
                onChange={handleStepsChange}
                isValid={showStepsError} />
            {showStepsError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputContainer>
        <ButtonWrapper>
            <CreateButton onClick={handleButtonClick}>
                Create
            </CreateButton>
        </ButtonWrapper>
    </Container>
  )
}

export default AddRecipe