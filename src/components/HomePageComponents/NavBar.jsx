import React, { useState } from 'react'
import { styled, keyframes } from 'styled-components'
import { Menu, Minimize } from '@mui/icons-material';
import GenerateMeals from './GenerateMeals';

const Container = styled.div`
    margin-top: 12px;
    overflow: hidden;
    width: 100%;
`;

const Banner = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 18.5px;
`;

const MenuIcon = styled(Menu)`
    fill: rgb(245, 245, 245) !important;
    margin-left: -1.4px;
    font-size: 1.4rem !important;
    transition: all 0.3s ease-in-out !important;

    &:hover {
        fill: rgb(50, 50, 50) !important;
        cursor: pointer;
    }
`;

const OpenMe = styled.div`
    color: rgb(245, 245, 245);
    font-size: 0.75rem;
    letter-spacing: 0.2rem;
    font-family: 'Playfair Display', sans-serif;
    line-height: 1.3;
    font-style: italic;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: opacity 0.4s ease-in-out;
`;

const MenuOptions = styled.div`
    margin-top: 12px;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? "100px" : "0")};
    transition: max-height 0.3s ease-in-out;
`;

const MenuOption = styled.div`
    margin-bottom: 12px;
    color: rgb(245, 245, 245);
    font-size: 1rem;
    letter-spacing: 0.075rem;
    font-family: 'Playfair Display', sans-serif;
    line-height: 1.3;
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        color: rgb(30, 30, 30);
    }
`;

const NavBar = ({ setMeals }) => {

    const [expanded, setExpanded] = useState(false);
    const [showGenerateMeals, setShowGenerateMeals] = useState(false);
    
    const handleClick = () => {
        setExpanded(!expanded);
    }

    const handleGenerateMealClick = () => {
        setExpanded(false);
        setShowGenerateMeals(true);
    }

  return (
    <Container>
        <Banner>
            <MenuIcon onClick={handleClick}></MenuIcon>
            <OpenMe isOpen={!expanded}>・open me・</OpenMe>
        </Banner>
        <MenuOptions isOpen={expanded}>
            <MenuOption onClick={handleGenerateMealClick}>Generate meals</MenuOption>
            <MenuOption onClick={handleGenerateMealClick}>Add a recipe</MenuOption>
            <MenuOption onClick={handleGenerateMealClick}>Ingredient based</MenuOption>
        </MenuOptions>
        {showGenerateMeals && <GenerateMeals setMeals={setMeals}></GenerateMeals>}
    </Container>
  )
}

export default NavBar