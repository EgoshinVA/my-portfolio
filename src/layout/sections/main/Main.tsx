import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import photo from '../../../assets/images/photo.png'
import {Container} from "../../../components/Container";
import {theme} from "../../../style/Theme";
import {font} from "../../../style/Common";

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
                            <p>their goals by designing usercentric digital</p>
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
  padding: 190px 0 145px;
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
`

const MainTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media ${theme.media.tablet}{
    align-items: center;
  }
`

const MainText = styled.span`
  ${font({weight: 500, Fmax: 20, Fmin: 18})}
  color: ${theme.colors.secondFont};
  margin: 24px 0 88px;
  @media ${theme.media.tablet} {
    text-align: center;
    margin: 20px 0 48px;
  }
`

const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 54, Fmin: 36})}
  margin-top: 31px;
  @media ${theme.media.tablet} {
    text-align: center;
  }
`

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;

  @media ${theme.media.tablet} {
    width: 240px;
    height: 240px;
  }
`



