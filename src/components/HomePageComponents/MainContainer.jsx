import React from 'react'
import styled from 'styled-components'
import mealData from '../../resources/meals.json'

const Container = styled.div`
    position: absolute;
    width: 70vw;
    height: 81vh;
    border-radius: 30px 0 0 0;
    bottom: 0;
    right: 0;
    background-color: rgb(105, 141, 166);
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    background-color: rgb(235, 235, 235);
    width: 100%;
    height: 100%;
    border-radius: 12px 12px 0 0;
    box-sizing: border-box;
    padding: 20px;
`;

const ChooseButton = styled.button`

`;

const MainContainer = ({ setMeal }) => {

    const meals = mealData.meals;

    const selectMeal = () => {
        const randIndex = Math.floor(Math.random() * meals.length);
        console.log(randIndex);
        setMeal([meals[randIndex]]);
    }

  return (
    <Container>
        <ContentWrapper>
            <ChooseButton onClick={selectMeal}>Generate</ChooseButton>
        </ContentWrapper>
    </Container>
  )
}

export default MainContainer