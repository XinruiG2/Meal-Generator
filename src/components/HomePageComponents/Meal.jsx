import React, { useState } from 'react'
import styled from 'styled-components'
import Ingredients from './Ingredients';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    border-radius: 8px;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const RecipeName = styled.div`
    font-weight: 600;
    transform: scaleY(1.12);
    font-style: italic;
    color: ${(props) => props.option};
    font-size: 3.25rem;
    font-family: 'Playfair Display', serif;
    letter-spacing: -0.12rem;
    height: fit-content;
    transition: all 0.3s ease-in-out;
    letter-spacing: -0.12rem;
    background: linear-gradient(to left, rgb(66, 69, 71) 50%, rgb(150, 150, 150, 0.3) 50%) right;
    background-size: 200% 100%;
    box-sizing: border-box;
    padding: 0 14px 0 2px;

    &:hover {
        cursor: pointer;
        letter-spacing: -0.05rem;
        background-position: left;
    }
`;

const Meal = ({ meal, style }) => {

    const [showMore, setShowMore] = useState(false);
    const [downArrow, setDownArrow] = useState(true);

    let textColor;

    if (style === 0) {
        textColor = "rgb(245, 245, 245)";
    } else if (style == 1) {
        textColor = "black";
    } else {
        textColor = "rgb(89,154,195)";
    }

    const changeRecipeVisibility = () => {
        setShowMore(!showMore);
    }

    const mealName = meal.name.toUpperCase();

  return (
    <Container>
        <RecipeName option={textColor}>{mealName}</RecipeName>
    </Container>
  )
}

export default Meal