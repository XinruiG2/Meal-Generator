import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: -0.35rem;
  margin-bottom: 0.85rem;
`;

const Step = styled.div`
  font-family: 'Domine', serif;
  color: rgb(40, 40, 40);
  font-size: 0.82rem;
  font-weight: 400;
  margin-bottom: 0.65rem;
  line-height: 1.1rem;
  letter-spacing: 0.02rem;
`;

const Instructions = ({ instructions }) => {
  return (
    <Container>
        {instructions.map(element => (
            <Step>{element}</Step>
        ))}
    </Container>
  )
}

export default Instructions