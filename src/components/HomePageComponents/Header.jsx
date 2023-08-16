import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
`;

const Label = styled.div`
    font-size: 5rem;
    font-weight: 500;
    color: rgb(66, 69, 71);
    font-family: 'Oswald', sans-serif;
    letter-spacing: 1rem;
    text-transform: uppercase;
    font-style: italic;
    margin-left: 1.7rem;
    margin-top: 0.3rem;

    text-shadow: 0 0 1px rgb(176,182,182), 
      1px 1px 1px rgb(176,182,182), 
      2px 2px 1px rgb(176,182,182),
      3px 3px 1px rgb(176,182,182),
      4px 4px 1px rgb(176,182,182);

`;

const Header = () => {
  return (
    <Container>
        <Label>Meal Generator</Label>
    </Container>
  )
}

export default Header