import React, { useState } from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    background-color: rgb(252, 251, 244, 0.95);
    border-radius: 5px;
    padding: 30px 10px 28px 10px;
    margin-top: 13px;
`;

const UserInput = styled.input`
    border: none;
    width: 65%;
    height: 33px;
    background: none;
    padding: 0;
    font-size: 94%;
    color: rgb(40, 40, 40);
    margin: 0 0 6px 5px;
    letter-spacing: 0.035rem;
    border-bottom: ${props =>
        props.isValid
        ? '1.5px solid #D21404'
        : '1.5px solid rgb(110, 110, 110, 0.75)'};

    &:focus {
        outline: none;
    }
`;

const ButtonWrapper = styled.div`
    margin: 18px 0 2px 5px;
`;

const GenerateMealsButton = styled.button`
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
    padding: 2px 0 0 5px;
`;

const GenerateMeals = ({ setMeals }) => {

    const [numberOfMeals, setNumberOfMeals] = useState('');
    const [numberInvalid, setNumberInvalid] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleNumberChange = (event) => {
        const input = event.target.value;
        setNumberOfMeals(input);
    };

    const handleButtonClick = () => {
        const meals = JSON.parse(localStorage.getItem("meals"));
        const intValue = parseInt(numberOfMeals);

        if (numberOfMeals === '') {
            setNumberInvalid(true);
            setErrorMessage("This is a required field");
            setShowError(true);
        } else if (intValue > meals.length || intValue <= 0) {
            setNumberInvalid(true);
            setErrorMessage("Please enter an integer between 1-" + meals.length);
            setShowError(true);
        } else if (!validInput(intValue)) {
            setNumberInvalid(true);
            setErrorMessage("Please enter an integer value");
            setShowError(true);
        }
        else {
            setShowError(false);
            setNumberInvalid(false);
            const alreadyVisitedIndices = [];
            const chosenMeals = [];
            while (chosenMeals.length < intValue) {
                const randIndex = Math.floor(Math.random() * meals.length);
                if (!alreadyVisitedIndices.includes(randIndex)) {
                  chosenMeals.push(meals[randIndex]);
                  alreadyVisitedIndices.push(randIndex);
                }
              }
            setMeals(chosenMeals);
        }
    }

    const validInput = (intValue) => {
        return !isNaN(intValue) && Number.isInteger(intValue);
    }

  return (
    <Container>
        <UserInput
            placeholder="Number of meals to generate"
            value={numberOfMeals}
            onChange={handleNumberChange}
            isValid={numberInvalid} />
        {showError && 
            <ErrorMessage>{errorMessage}</ErrorMessage>}
        <ButtonWrapper>
            <GenerateMealsButton onClick={handleButtonClick}>
                Generate
            </GenerateMealsButton>
        </ButtonWrapper>
    </Container>
  )
}

export default GenerateMeals