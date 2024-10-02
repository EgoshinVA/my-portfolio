import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import { S } from './Contact_Styles';

export const Contact: React.FC = () => {
    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <S.TitleWrapper>
                    <S.Title>If you are looking to hire a product designer,
                        I’m currently available for freelance work</S.Title>
                </S.TitleWrapper>
                <Button></Button>
            </Container>
        </S.Contact>
    );
};


