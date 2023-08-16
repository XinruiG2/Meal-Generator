import React from 'react'
import styled from 'styled-components'
import Meal from './Meal';

const Container = styled.div`
    width: 23vw;
    height: 81vh;
    overflow-y: scroll;
    position: absolute;
    bottom: 0;
    left: 3.5vw;
`;

const MealCards = ({ selectedMeal }) => {
  return (
    <Container>
        {selectedMeal.map(element => (
            <Meal meal={element}></Meal>
        ))}
    </Container>
  )
}

export default MealCards