import React from 'react';
import styled from "styled-components";
import {HeaderMenu} from "./HeaderMenu";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../style/Theme";
import {Container} from "../../components/Container";

export const Header = () => {
    let menuItems = ['Home', 'Work', 'Contact']

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo>
                        <Icon iconId='logo' viewBox={'0 0 40 40'} width={'40'} height={'40'}/>
                        <Title>Portfolio</Title>
                    </Logo>
                    <HeaderMenu menuItems={menuItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.secondaryBg};
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
`

const Logo = styled.div`
  color: ${theme.colors.font};
  margin: 20px 0;
  display: flex;
  align-items: center;
`

const Title = styled.span`
  font-size: 20px;
  font-weight: 800;
`

