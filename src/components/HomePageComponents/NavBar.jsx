import React, { useState } from 'react'
import { styled, keyframes } from 'styled-components'
import { Menu, Minimize } from '@mui/icons-material';
import GenerateMeals from './GenerateMeals';
import AddRecipe from './AddRecipe';
import IngredientBased from './IngredientBased';

const Container = styled.div`
    margin-top: 12px;
    width: 100%;
    padding-bottom: 35px;

    @media (max-width: 1000px) {
        padding-bottom: 0;
    }
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
    max-height: ${({ isOpen }) => (isOpen ? "140px" : "0")};
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

const AboutOption = styled.div`
    color: rgb(245, 245, 245);
    font-family: 'Domine';
    letter-spacing: 0.075rem;
    line-height: 1.8;
    font-size: 0.73rem;
`;

const AboutWrapper = styled.div`
    margin-top: 29px;
`;

const AboutHeader = styled.div`
    font-style: bold;
    font-weight: 700;
    color: rgb(245, 245, 245);
    font-family: 'Domine';
    letter-spacing: 0.075rem;
    font-size: 0.86rem;
    margin-bottom: 10px;
`;

const NavBar = ({ setMeals }) => {

    const [expanded, setExpanded] = useState(false);
    const [showGenerateMeals, setShowGenerateMeals] = useState(false);
    const [showAddRecipe, setShowAddRecipe] = useState(false);
    const [showIngredientBased, setShowIngredientBased] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    
    const handleClick = () => {
        setExpanded(!expanded);
    }

    const handleGenerateMealClick = () => {
        setExpanded(false);
        setShowGenerateMeals(true);
        setShowAddRecipe(false);
        setShowIngredientBased(false);
        setShowFavorites(false);
    }

    const handleAddRecipeClick = () => {
        setExpanded(false);
        setShowGenerateMeals(false);
        setShowAddRecipe(true);
        setShowIngredientBased(false);
        setShowFavorites(false);
    }

    const handleIngredientBasedClick = () => {
        setExpanded(false);
        setShowGenerateMeals(false);
        setShowAddRecipe(false);
        setShowIngredientBased(true);
        setShowFavorites(false);
    }

    const handleFavoritesClick = () => {
        setExpanded(false);
        setShowGenerateMeals(false);
        setShowAddRecipe(false);
        setShowIngredientBased(false);
        setShowFavorites(true);
        setMeals(JSON.parse(localStorage.getItem("favorites")));
    }

  return (
    <Container>
        <Banner>
            <MenuIcon onClick={handleClick}></MenuIcon>
            <OpenMe isOpen={!expanded}>・open me・</OpenMe>
        </Banner>
        <MenuOptions isOpen={expanded}>
            <MenuOption onClick={handleGenerateMealClick}>Generate meals</MenuOption>
            <MenuOption onClick={handleAddRecipeClick}>Add a recipe</MenuOption>
            <MenuOption onClick={handleIngredientBasedClick}>Ingredient based</MenuOption>
            <MenuOption onClick={handleFavoritesClick}>Favorites</MenuOption>
        </MenuOptions>
        {showGenerateMeals && <GenerateMeals setMeals={setMeals}></GenerateMeals>}
        {showGenerateMeals && 
        <AboutWrapper>
            <AboutHeader>About 'Generate Meals':</AboutHeader>
            <AboutOption>This selection allows you to randomly generate a designated
                number of meals. The number entered cannot exceed the amount of recipes saved in our
                recipe bank.
            </AboutOption>
        </AboutWrapper>}
        {showAddRecipe && <AddRecipe></AddRecipe>}
        {showAddRecipe && 
        <AboutWrapper>
            <AboutHeader>About 'Add a Recipe':</AboutHeader>
            <AboutOption>This selection allows you to save as many custom recipes as you want to local storage.
                These recipes can be accessed and generated as long as incidents like clearing browsing history or 
                deleting cookies do not occur. Happy recipe creating!
            </AboutOption>
        </AboutWrapper>}
        {showIngredientBased && <IngredientBased setMeals={setMeals}></IngredientBased>}
        {showIngredientBased && 
        <AboutWrapper>
            <AboutHeader>About 'Ingredient Based':</AboutHeader>
            <AboutOption>This selection allows you to search for recipes that contain at least one of the listed
                ingredients. Please note that the search method does not account for plural vs singular so entering
                egg will not generate recipes that contain the keyword 'eggs'.
            </AboutOption>
        </AboutWrapper>}
        {showFavorites && 
        <AboutWrapper>
            <AboutHeader>About 'Favorites':</AboutHeader>
            <AboutOption>Where you can easily find all of the recipes you already know and love! 
                A favorited recipe is indicated by a blue star at the top of a meal card.
            </AboutOption>
        </AboutWrapper>}
    </Container>
  )
}

export default NavBar