import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: none;
`;

const Text = styled.div`
    margin-top: 0rem;
    margin-left: 4.5rem;
    transform: skew(59.5deg, -16deg) scaleX(2.1) scaleY(1);
    font-size: 6.1rem;
    font-weight: 300;
    color: rgb(85, 86, 91);
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    padding: 0 100px 1.25rem 100px;
    border-bottom: 25px solid rgb(85, 86, 91);
    transition: all 0.35s ease-in-out;
    background: linear-gradient(to left, darkGray 50%, rgb(225, 225, 225) 50%) right;
    background-size: 200% 100%;

    --x-offset: -0.043em;
    --y-offset: 0.065em;
    --stroke: 0.027em;
    --background-color: darkGray;
    --stroke-color: white;
  
      text-shadow: 
        var(--x-offset)
        var(--y-offset)
        0px
        var(--background-color), 
        
        calc( var(--x-offset) - var(--stroke) )
        calc( var(--y-offset) + var(--stroke) )
        0px
        var(--stroke-color);

      &:hover {
        cursor: pointer;
        background-position: left;
      }

      @media (max-width: 1000px) {
        margin-top: -3rem;
        margin-left: 16rem;
        padding: 0.5rem 300px 1.5rem 300px;
      }
`;

const FlatText = () => {

  const notDesktopView = window.innerWidth <= 1000;

  return (
    <Container>
        <Text>Homemade{notDesktopView && <br />}Meals</Text>
    </Container>
  )
}

export default FlatText