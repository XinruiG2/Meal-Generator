import React from 'react'
import { styled, keyframes } from 'styled-components'
import { Menu } from '@mui/icons-material';
import NavBar from './NavBar';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FadeInContainer = styled.div`
    opacity: 0;
    animation: fadeIn 0.55s forwards;
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 0.5s forwards;
    position: absolute;
    width: 33vw;
    height: 100vh;
    top: 0;   
    left: 0;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0px;
        background-color: transparent;
    }

    @media (max-width: 1000px) {
        position: static;
        background-color: rgb(51,92,129);
        width: 100vw;
        height: fit-content;
    }
`;

const ContentWrapper = styled.div`
    width: 33vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    box-sizing: border-box;
    padding: 45px 35px;

    @media (max-width: 1000px) {
        width: 90%;
    }
`;

const ChooseButton = styled.button`
    background-color: rgb(245, 245, 245, 0.75);
    border: none;
    font-weight: 700;
    color: black;
    padding: 12px;
    width: 100%;
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    letter-spacing: 0.65rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`;

const RecipeDescriptions = styled.div`
    color: rgb(245, 245, 245);
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    font-family: 'Playfair Display', sans-serif;
    line-height: 1.3;
    text-transform: uppercase;
`;

const Banner = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
`;

const MenuIcon = styled(Menu)`
    fill: rgb(245, 245, 245) !important;
    margin-left: -1.4px;
    font-size: 1.4rem !important;
    transition: all 0.3s ease-in-out !important;

    &:hover {
        fill: rgb(55, 55, 55) !important;
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
`;

const MainContainer = ({ setMeal }) => {

    const isDesktopView = window.innerWidth > 1000;

  return (
    <Container>
        <ContentWrapper>
            <RecipeDescriptions>
                A collection of{isDesktopView && <br />} 
                recipes dear to me .
            </RecipeDescriptions>
            <NavBar setMeals={setMeal}></NavBar>
        </ContentWrapper>
    </Container>
  )
}

export default MainContainer