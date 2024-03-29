import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: -0.35rem;
`;

const Ingredient = styled.div`
  font-family: 'Domine', serif;
  color: rgb(40, 40, 40);
  font-size: 0.82rem;
  font-weight: 400;
  margin-bottom: 0.55rem;
  line-height: 1.1rem;
  letter-spacing: 0.02rem;
`;

const Ingredients = ({ ingredients }) => {
  return (
    <Container>
        {ingredients.map(element => (
            <Ingredient>{element.toLowerCase()}</Ingredient>
        ))}
    </Container>
  )
}

export default Ingredients