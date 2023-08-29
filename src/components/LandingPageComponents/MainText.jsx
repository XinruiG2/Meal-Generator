import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`;

const TopLeftText = styled.div`
    position: absolute;
    top: 0; 
    left: 0; 
    padding: 0 1.4rem;

    @media (max-width: 1000px) {
        padding: 0.6rem 2rem;
    }
`;

const MealHeader = styled.div`
    font-family: 'Rubik', sans-serif;
    color: rgb(66, 69, 71, 0.95);
    font-weight: 700;
    font-size: 8rem;

    @media (max-width: 1000px) {
        font-size: 9rem;
    }
`;

const Instructions = styled.div`
    color: rgb(66,69,71, 0.85);
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    letter-spacing: 0.05rem;
    margin-left: 0.5rem;
    line-height: 1.65rem;
    margin-top: 0.5rem;

    @media (max-width: 1000px) {
        font-size: 2.25rem;
        line-height: 1.25;
        margin-top: 0.25rem;
    }
`;

const GeneratorHeader = styled.div`
    font-family: 'Rubik', sans-serif;
    color: rgb(66, 69, 71, 0.95);
    font-weight: 700;
    font-size: 8rem;

    @media (max-width: 1000px) {
        font-size: 9rem;
    }
`;

const BottomRightText = styled.div`
    position: absolute;
    bottom: 0; 
    right: 0; 
    padding: 0 1.7rem;
    display: flex;
    flex-direction: column;
    align-items: end;

    @media (max-width: 1000px) {
        padding: 0.6rem 2.3rem;
    }
`;

const AppDescription = styled.div`
    color: rgb(66,69,71, 0.85);
    font-style: italic;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.25rem;
    margin-top: -1.25rem;
    margin-bottom: 1.55rem;
    margin-right: 1.53rem;

    @media (max-width: 1000px) {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.2rem;
    }
`;

const MainText = () => {
  return (
    <Container>
        <TopLeftText>
            <MealHeader>Meal</MealHeader>
            <Instructions>
                Welcome! Please<br />
                <b>click <i>anywhere</i></b><br />
                to begin.
            </Instructions>
        </TopLeftText>
        <BottomRightText>
            <GeneratorHeader>Generator</GeneratorHeader>
            <AppDescription>
                for days when you don't know what to cook
            </AppDescription>
        </BottomRightText>
    </Container>
  )
}

export default MainText