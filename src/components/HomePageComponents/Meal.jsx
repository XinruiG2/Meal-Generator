import React, { useState } from 'react'
import { styled, keyframes } from 'styled-components'
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { Minimize } from '@mui/icons-material';

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
    background: linear-gradient(to left, rgb(58, 58, 58) 50%, rgb(165, 165, 165, 0.3) 50%) right;
    background-size: 200% 100%;
    box-sizing: border-box;
    padding: 0 12px 0 2px;

    &:hover {
        cursor: pointer;
        letter-spacing: -0.05rem;
        background-position: left;
    }
`;

const expand = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const RecipeAnimatedContainer = styled.div`
    opacity: 0;
    animation: expand 0.75s forwards;
`;

const RecipeExpanded = styled(RecipeAnimatedContainer)`
    animation: ${expand} 0.75s forwards;
    height: auto;
    background-color: rgb(245, 245, 245, 0.85);
    margin-top: 15px;
    width: 100%;
    border-radius: 5px;
`;

const Banner = styled.div`
    width: 100%;
    height: 35px;
    background-color: ${(props) => props.option};
    border-radius: 5px 5px 0 0;
`;

const MinimizeButton = styled(Minimize)`
    font-size: 1.35rem !important;
    margin-left: 7px;
    fill: rgb(70, 70, 70) !important;

    &:hover {
        cursor: pointer;
    }
`;

const MainContent = styled.div`
    padding: 0.3rem 1.25rem 1rem 1.2rem;
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 10px;
`;

const IngredientsWrapper = styled.div``;

const Label = styled.h2`
    font-weight: 700;
    letter-spacing: 0.03rem;
    font-family: 'Domine', serif;
    font-size: 1.2rem;
    text-transform: uppercase;
`;

const InstructionsWrapper = styled.div``;

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
        {!showMore && <RecipeName option={textColor} onClick={changeRecipeVisibility}>
            {mealName}
        </RecipeName>}
        {showMore && <RecipeExpanded>
                <Banner option={textColor}>
                    <MinimizeButton onClick={changeRecipeVisibility}/>
                </Banner>
                <MainContent>
                    <IngredientsWrapper>
                        <Label>Ingredients</Label>
                        <Ingredients ingredients={meal.ingredients}></Ingredients>
                    </IngredientsWrapper>
                    <InstructionsWrapper>
                        <Label>Instructions</Label>
                        <Instructions instructions={meal.instructions}></Instructions>
                    </InstructionsWrapper>
                </MainContent>
            </RecipeExpanded>}
    </Container>
  )
}

export default Meal