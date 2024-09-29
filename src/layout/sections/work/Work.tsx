import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import laptop from '../../../assets/images/laptop.png'
import mac from '../../../assets/images/mac.png'
import work from '../../../assets/images/work.png'
import phone from '../../../assets/images/phone.png'
import {Container} from "../../../components/Container";
import Icon from "../../../components/icon/Icon";
import { S } from './Work_Styles';

export const Work: React.FC = () => {
    return (
        <S.Work>
            <Container>
                <S.LabelIcon>
                    <Icon iconId={'arrow'} height={'32'} viewBox={'0 0 32 32'}/>
                    <S.Label>Featured Work</S.Label>
                </S.LabelIcon>
                <FlexWrapper wrap justify={'center'}>
                    <S.Column>
                        <S.WorkPhotoWrapper><S.WorkPhoto src={laptop}/><S.Link>InVersion</S.Link></S.WorkPhotoWrapper>
                        <S.WorkPhotoWrapper><S.WorkPhoto src={work}/><S.Link>InVersion</S.Link></S.WorkPhotoWrapper>
                    </S.Column>
                    <S.Column>
                        <S.WorkPhotoWrapper><S.WorkPhoto src={mac}/><S.Link>InVersion</S.Link></S.WorkPhotoWrapper>
                        <S.WorkPhotoWrapper><S.WorkPhoto src={phone}/><S.Link>InVersion</S.Link></S.WorkPhotoWrapper>
                    </S.Column>
                </FlexWrapper>
            </Container>
        </S.Work>
    );
};