import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import figma from '../../../assets/images/figma.png'
import bust from '../../../assets/images/bust.png'
import hand from '../../../assets/images/hand.png'
import {SectionTitle} from "../../../components/SectionTitle";

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Personal Projects</SectionTitle>
            <FlexWrapper>
                <ProjectPhoto src={figma}/>
                <ProjectPhoto src={bust}/>
                <ProjectPhoto src={hand}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section``

const ProjectPhoto = styled.img`
  width: 400px;
  height: 560px;
`