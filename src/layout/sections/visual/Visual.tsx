import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import cube from '../../../assets/images/cube.png'
import ellipse from '../../../assets/images/ellipse.png'
import chair from '../../../assets/images/chair.png'
import game from '../../../assets/images/game.png'
import ball from '../../../assets/images/ball.png'
import rectangle from '../../../assets/images/rectangle.png'
import {Container} from "../../../components/Container";
import {S} from './Visual_Styles';

const photoData = [cube, ellipse, chair, game, ball, rectangle]

export const Visual: React.FC = () => {
    return (
        <S.Visual>
            <Container>
                <SectionTitle>Visual Explorations</SectionTitle>
                <FlexWrapper wrap justify={'space-around'}>
                        {photoData.map((photo, index) => <S.Picture key={index} src={photo}/>)}
                </FlexWrapper>
            </Container>
        </S.Visual>
    );
};