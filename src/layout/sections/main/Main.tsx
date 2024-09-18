import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import photo from '../../../assets/images/photo.png'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={'space-around'}>
                <MainTextBlock>
                    <MainTitle>Hi, I am Your Name
                        A Product Designer
                        based in City.</MainTitle>
                    <MainText>I help businesses and companies reach
                        their goals by designing user-centric digital
                        products & interactive experiences.</MainText>
                    <Button></Button>
                </MainTextBlock>
                <img src={photo} alt='photo'/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: #cdf5ab;
  min-height: 100vh;
`

const MainTextBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const MainText = styled.span`

`

const MainTitle = styled.h1``



