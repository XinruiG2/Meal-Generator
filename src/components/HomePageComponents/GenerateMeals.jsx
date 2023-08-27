import React, { useState } from 'react'
import { styled } from 'styled-components'
import mealData from '../../resources/meals.json'

const Container = styled.div`
    background-color: rgb(252, 251, 244, 0.7);
    border-radius: 4px;
    padding: 30px 10px 28px 10px;
    margin-right: 35px;
    margin-top: 14px;
`;

const UserInput = styled.input`
    border: none;
    width: 68%;
    height: 33px;
    background: none;
    padding: 0;
    font-size: 95%;
    color: rgb(40, 40, 40);
    margin: 0 0 6px 5px;
    letter-spacing: 0.02rem;
    border-bottom: ${props =>
        props.isValid
        ? '1.5px solid #D21404'
        : '1.5px solid rgb(110, 110, 110)'};

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
    letter-spacing: 0.05rem;
    font-weight: 400;
    padding: 6.5px 9px;
    border-radius: 5px;
    border: 1px solid gray;
    transition: all 0.3s ease-in-out;
    color: rgb(40, 40, 40);

    &:hover {
        cursor: pointer;
        background-color: rgb(58, 58, 58, 0.55);
        color: rgb(245, 245, 245);
    }
`;

const GenerateMeals = ({ setMeals }) => {

    const [numberOfMeals, setNumberOfMeals] = useState('');
    const [numberInvalid, setNumberInvalid] = useState(false);
    const meals = mealData.meals;

    const handleNumberChange = (event) => {
        const input = event.target.value;
        setNumberOfMeals(input);
        setNumberInvalid(false);
    };

    const handleButtonClick = () => {
        const intValue = parseInt(numberOfMeals);

        if (numberOfMeals === '' && validInput(intValue)) {
            setNumberInvalid(true);
        } else {
            const randIndex = Math.floor(Math.random() * meals.length);
            console.log(randIndex);
            // setMeal([meals[randIndex]]);
            if (intValue > meals.length) {
                setMeals(meals);
            } else {
                setMeals(meals.slice(0, intValue));
            }
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
        <ButtonWrapper>
            <GenerateMealsButton onClick={handleButtonClick}>
                Generate
            </GenerateMealsButton>
        </ButtonWrapper>
    </Container>
  )
}

export default GenerateMeals