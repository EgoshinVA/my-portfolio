import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import laptop from '../../../assets/images/laptop.png'
import mac from '../../../assets/images/mac.png'
import work from '../../../assets/images/work.png'
import phone from '../../../assets/images/phone.png'
import {Container} from "../../../components/Container";
import Icon from "../../../components/icon/Icon";
import {theme} from "../../../style/Theme";


export const Work = () => {
    return (
        <StyledWork>
            <Container>
                <LabelIcon>
                    <Icon iconId={'arrow'} height={'32'} viewBox={'0 0 32 32'}/>
                    <Label>Featured Work</Label>
                </LabelIcon>
                <FlexWrapper wrap justify={'center'}>
                    <WorkPhotoWrapper><WorkPhoto src={laptop}/><Link>InVersion</Link></WorkPhotoWrapper>
                    <WorkPhotoWrapper second><WorkPhoto src={mac}/><Link>InVersion</Link></WorkPhotoWrapper>
                    <WorkPhotoWrapper><WorkPhoto src={work}/><Link>InVersion</Link></WorkPhotoWrapper>
                    <WorkPhotoWrapper second><WorkPhoto src={phone}/><Link>InVersion</Link></WorkPhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledWork>
    );
};

const StyledWork = styled.section``

const Label = styled.label``

const LabelIcon = styled.div`
  color: ${theme.colors.font};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-bottom: 80px;

`

type WorkPhotoPropsType = {
    second?: boolean
}

const WorkPhoto = styled.img`
  width: 612px;
  height: 888px;
`

const Link = styled.a`
  font-size: 40px;
  font-weight: 700;
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const WorkPhotoWrapper = styled.div<WorkPhotoPropsType>`
  position: relative;
  transform: translateY(${props => props.second ? '138px' : '0'});

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
    }
  ;

    ${Link} {
      opacity: 1;
      
    }
  }
`

