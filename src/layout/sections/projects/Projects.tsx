import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import figma from '../../../assets/images/figma.png'
import bust from '../../../assets/images/bust.png'
import hand from '../../../assets/images/hand.png'
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import { S } from './Projects_Styles';

const photoData = [figma, bust, hand]

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Personal Projects</SectionTitle>
                <FlexWrapper justify={'space-around'} wrap>
                    {photoData.map((photo, index)=><S.ProjectPhoto key={index} src={photo}/>)}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};