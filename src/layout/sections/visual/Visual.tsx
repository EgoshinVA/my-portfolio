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

export const Visual = () => {
    return (
        <StyledVisual>
            <SectionTitle>Visual Explorations</SectionTitle>
            <FlexWrapper wrap>
                <Picture src={cube}/>
                <Picture src={ellipse}/>
                <Picture src={chair}/>
                <Picture src={game}/>
                <Picture src={ball}/>
                <Picture src={rectangle}/>
            </FlexWrapper>
        </StyledVisual>
    );
};

const StyledVisual = styled.section``

const Picture = styled.img`
  width: 400px;
  height: 408px;
  margin: 12px;
`