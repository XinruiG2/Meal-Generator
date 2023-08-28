import React from 'react'
import { styled, keyframes } from 'styled-components'
import FlatText from '../components/LandingPageComponents/FlatText';
import MainText from '../components/LandingPageComponents/MainText';
import Triangles from '../components/LandingPageComponents/Triangles';
import Circle from '../components/LandingPageComponents/Circle';
import { useNavigate } from 'react-router-dom';
import mealData from '../resources/meals.json'

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
    animation: fadeIn 1s forwards;
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 1s forwards;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const LandingPage = () => {

  const navigate = useNavigate();

  const navigateToMain = () => {
    const meals = mealData.meals;
    localStorage.setItem("meals", JSON.stringify(meals));
    navigate("/home");
  }

  return (
    <Container onClick={navigateToMain}>
        <MainText></MainText>
        <FlatText></FlatText>
        <Triangles></Triangles>
    </Container>
  )
}

export default LandingPage