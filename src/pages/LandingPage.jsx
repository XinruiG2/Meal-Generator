import React from 'react'
import { styled } from 'styled-components'
import FlatText from '../components/LandingPageComponents/FlatText';
import MainText from '../components/LandingPageComponents/MainText';
import Triangles from '../components/LandingPageComponents/Triangles';
import Circle from '../components/LandingPageComponents/Circle';
import { useNavigate } from 'react-router-dom';
import mealData from '../resources/meals.json'

const Container = styled.div`
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