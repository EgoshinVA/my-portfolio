import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import photo from '../../../assets/images/photo.png'
import {Container} from "../../../components/Container";
import {theme} from "../../../style/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <MainTextBlock>
                        <MainTitle><p>Hi, I am Vitaliy</p>
                            <p>A Product Designer</p>
                                <p>based in City.</p></MainTitle>
                        <MainText><p>I help businesses and companies reach</p>
                            <p>their goals by designing user-centric digital</p>
                            <p>products & interactive experiences.</p></MainText>
                        <Button></Button>
                    </MainTextBlock>
                    <Image src={photo} alt='photo'/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  padding: 190px 0 145px
`

const MainTextBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const MainText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.secondFont};
  margin: 24px 0 88px;
`

const MainTitle = styled.h1`
  font-size: 54px;
  font-weight: 700;
  margin-top: 31px;
`

const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-right: 100px;
`



