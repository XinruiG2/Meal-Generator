import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/HomePageComponents/Header';
import MainContainer from '../components/HomePageComponents/MainContainer';
import MealCards from '../components/HomePageComponents/MealCards';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    position: relative;
    background-color: rgb(235, 235, 235);
`;

const Home = () => {

  const [selectedMeal, setSelectedMeal] = useState(null);

  return (
    <Container>
        <Header></Header>
        <MainContainer setMeal={setSelectedMeal}></MainContainer>
        <MealCards selectedMeal={selectedMeal}></MealCards>
    </Container>
  )
}

export default Home