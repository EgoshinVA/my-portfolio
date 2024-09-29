import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import photo from '../../../assets/images/photo.png'
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <S.MainTextBlock>
                        <S.MainTitle><p>Hi, I am Vitaliy</p>
                            <p>A Product Designer</p>
                                <p>based in City.</p></S.MainTitle>
                        <S.MainText><p>I help businesses and companies reach</p>
                            <p>their goals by designing usercentric digital</p>
                            <p>products & interactive experiences.</p></S.MainText>
                        <Button></Button>
                    </S.MainTextBlock>
                    <S.Image src={photo} alt='photo'/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};



