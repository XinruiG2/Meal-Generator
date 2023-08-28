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
`;

const MealCards = ({ selectedMeal }) => {
  return (
    <Container>
        {selectedMeal.map((element, index) => (
            <Meal meal={element} style={index % 3} />
        ))}
    </Container>
  )
}

export default MealCards