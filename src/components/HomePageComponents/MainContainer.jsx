import React from 'react'
import styled from 'styled-components'
import mealData from '../../resources/meals.json'

const Container = styled.div`
    position: absolute;
    width: 30vw;
    height: 63vh;
    border-radius: 20px;
    top: 23vh;   
    left: 15vw;
    background-color: rgb(245, 245, 245, 0.6);
    box-sizing: border-box;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    backdrop-filter: blur(5px);
    border: 2px solid rgb(245, 245, 245, 0.35);
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
`;

const ChooseButton = styled.button`
    background-color: rgb(245, 245, 245);
    border: none;
    font-weight: 700;
    color: black;
    padding: 12px;
    width: 100%;
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    letter-spacing: 0.75rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`;

const MainContainer = ({ setMeal }) => {

    const meals = mealData.meals;

    const selectMeal = () => {
        const randIndex = Math.floor(Math.random() * meals.length);
        console.log(randIndex);
        // setMeal([meals[randIndex]]);
        setMeal(meals);
    }

  return (
    <Container>
        <ContentWrapper>
            <ChooseButton onClick={selectMeal}>GENERATE</ChooseButton>
        </ContentWrapper>
    </Container>
  )
}

export default MainContainer