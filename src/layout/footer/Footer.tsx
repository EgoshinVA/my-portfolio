import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import {theme} from "../../style/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify='space-between' align={'center'}>
                    <Copyright>Made by <span>Vitaliy</span> — Copyright 2021</Copyright>
                    <StyledIconsList>
                        <ListItem><LinkItem href=""><Icon iconId='whatsapp' viewBox={'0 0 22 22'} height={'22'} width={'22'}/></LinkItem></ListItem>
                        <ListItem><LinkItem href=""><Icon iconId='ball' viewBox={'0 0 22 22'} height={'22'} width={'22'}/></LinkItem></ListItem>
                        <ListItem><LinkItem href=""><Icon iconId='link' viewBox={'0 0 22 22'} height={'22'} width={'22'}/></LinkItem></ListItem>
                        <ListItem><LinkItem href=""><Icon iconId='twitter' viewBox={'0 0 25 27'} height={'25'} width={'27'}/></LinkItem></ListItem>
                        <ListItem><LinkItem href=""><Icon iconId='be' viewBox={'0 0 25 27'} height={'25'} width={'27'}/></LinkItem></ListItem>
                    </StyledIconsList>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.primaryBg};
  position: relative;
  height: 120px;

  

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #696969;
  }

  @media ${theme.media.tablet}{
    ${FlexWrapper}{
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      gap: 35px;
    }
    height: 191px;
    
  }
`

const Copyright = styled.small`
  font-size: 16px;
  font-weight: 600;

  span {
    color: #FFFFFF;
  }

`

const StyledIconsList = styled.ul`
  display: flex;
  gap: 43px;
`

const ListItem = styled.li``

const LinkItem = styled.a``


