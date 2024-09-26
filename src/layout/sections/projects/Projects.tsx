import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import figma from '../../../assets/images/figma.png'
import bust from '../../../assets/images/bust.png'
import hand from '../../../assets/images/hand.png'
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../style/Theme";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Personal Projects</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap>
                    <ProjectPhoto src={figma}/>
                    <ProjectPhoto src={bust}/>
                    <ProjectPhoto src={hand}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  ${FlexWrapper} {
    gap: 24px;
  }
`

const ProjectPhoto = styled.img`
  width: 400px;
  height: 560px;
  
  @media ${theme.media.tablet}{
    width: 366px;
    height: 600px;
  }
`