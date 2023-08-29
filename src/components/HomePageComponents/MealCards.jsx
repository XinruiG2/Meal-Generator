import React from 'react'
import styled from 'styled-components'
import Meal from './Meal';

const Container = styled.div`
    width: 45vw;
    height: 100vh;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    right: 7vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    gap: 30px;
    box-sizing: border-box;
    padding: 35px 0 40px 0;

    &::-webkit-scrollbar {
      width: 0px;
      background-color: transparent;
    }

    @media (max-width: 1000px) {
      position: static;
      background-color: rgb(51,92,129);
      width: 100vw;
      height: 100%;
      padding: 48px 35px;
      border-top: 2px solid rgb(255, 255, 255, 0.4);
    }
`;

const MealCards = ({ selectedMeal }) => {

  console.log(selectedMeal);
  const favoriteMeals = JSON.parse(localStorage.getItem("favorites"));
  console.log(favoriteMeals);

  return (
    <Container>
        {selectedMeal.map((element, index) => (
            <Meal meal={element} style={index % 3} />
        ))}
    </Container>
  )
}

export default MealCards