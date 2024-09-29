import React from 'react';
import Icon from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import { S } from './Footer_Styles';

const iconData = ['whatsapp', 'ball', 'link', 'twitter', 'be']

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify='space-between' align={'center'}>
                    <S.Copyright>Made by <span>Vitaliy</span> — Copyright 2021</S.Copyright>
                    <S.StyledIconsList>
                        {iconData.map((icon, index) =>
                            <S.ListItem key={index}><S.LinkItem href=""><Icon iconId={icon} viewBox={'0 0 25 27'}
                                                                          height={'25'}
                                                                          width={'27'}/></S.LinkItem></S.ListItem>
                        )}
                    </S.StyledIconsList>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};


