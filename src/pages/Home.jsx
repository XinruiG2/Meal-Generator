import React, { useState } from 'react'
import { styled } from 'styled-components'
import Header from '../components/HomePageComponents/Header';
import MainContainer from '../components/HomePageComponents/MainContainer';
import MealCards from '../components/HomePageComponents/MealCards';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    position: relative;
`;

const LeftBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 33vw;
    background-color: rgb(51,92,129);
`;

const RightBlock = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 67vw;
    background-color: rgb(58, 58, 58);
`;

const Home = () => {

  const [selectedMeal, setSelectedMeal] = useState([]);

  return (
    <Container>
      <LeftBlock></LeftBlock>
      <RightBlock></RightBlock>
      <MainContainer setMeal={setSelectedMeal}></MainContainer>
      <MealCards selectedMeal={selectedMeal}></MealCards>
        {/* <Header></Header>
        <MainContainer setMeal={setSelectedMeal}></MainContainer>
        <MealCards selectedMeal={selectedMeal}></MealCards> */}
    </Container>
  )
}

export default Home