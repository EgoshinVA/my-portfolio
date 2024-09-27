import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import cube from '../../../assets/images/cube.png'
import ellipse from '../../../assets/images/ellipse.png'
import chair from '../../../assets/images/chair.png'
import game from '../../../assets/images/game.png'
import ball from '../../../assets/images/ball.png'
import rectangle from '../../../assets/images/rectangle.png'
import {Container} from "../../../components/Container";
import {theme} from "../../../style/Theme";

export const Visual = () => {
    return (
        <StyledVisual>
            <Container>
                <SectionTitle>Visual Explorations</SectionTitle>
                <FlexWrapper wrap justify={'space-around'}>
                    <Picture src={cube}/>
                    <Picture src={ellipse}/>
                    <Picture src={chair}/>
                    <Picture src={game}/>
                    <Picture src={ball}/>
                    <Picture src={rectangle}/>
                </FlexWrapper>
            </Container>
        </StyledVisual>
    );
};

const StyledVisual = styled.section`
${FlexWrapper}{
  gap: 24px;
  
  @media ${theme.media.tablet}{
    gap: 16px;
  }
}
  ${SectionTitle}{
    @media ${theme.media.tablet} {
      padding: 116px 0 34px;
    }
  }
  
`

const Picture = styled.img`
  max-width: 400px;
  width: 366px;
  flex-grow: 1;
  aspect-ratio: 1 / 1;
`