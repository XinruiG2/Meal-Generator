import React from 'react'
import styled from 'styled-components'

const Container = styled.div``;

const LeftBlock = styled.div`
    position: absolute;
    height: 100vh;
    width: 200px;
    left: 30%;
    top: 0;
    background-color: rgb(182, 206, 227, 0.75);
    z-index: -1;
    border-right: 30px solid rgb(105,141,166);
`;

const MiddleBlock = styled.div`
    position: absolute;
    height: 77.5vh;
    width: 170px;
    left: 58%;
    top: 0;
    border-radius: 0 0 20px 20px;
    background-color: rgb(182, 206, 227, 0.75);
    z-index: -1;
    border-right: 30px solid rgb(105,141,166);
`;

const RightBlock = styled.div`
    position: absolute;
    height: 65vh;
    width: 140px;
    left: 83%;
    top: 0;
    border-radius: 0 0 20px 20px;
    background-color: rgb(182, 206, 227, 0.75);
    z-index: -1;
    border-right: 30px solid rgb(105,141,166);
`;

const Triangles = () => {
  return (
    <Container>
        <LeftBlock></LeftBlock>
        <MiddleBlock></MiddleBlock>
        <RightBlock></RightBlock>
    </Container>
  )
}

export default Triangles