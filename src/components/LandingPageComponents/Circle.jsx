import React from 'react'
import styled from 'styled-components'

const CircleContainer = styled.div`
`;

const CircleBlue = styled.div`
    width: 50vh;
    height: 50vh; 
    background-color: rgb(200, 218, 233); 
    border: 30px solid rgb(105,141,166);
    border-radius: 50%; 
    position: absolute;
    top: 5%;
    transform: translateY(-50%);
    right: -15%; 
    z-index: -1;
`;

const Circle = () => {
  return (
    <CircleContainer>
        <CircleBlue></CircleBlue>
    </CircleContainer>
  )
}

export default Circle