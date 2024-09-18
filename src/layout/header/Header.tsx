import React from 'react';
import styled from "styled-components";
import {HeaderMenu} from "./HeaderMenu";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    let menuItems = ['Home', 'Work', 'Contact']

    return (
        <StyledHeader>
            <FlexWrapper justify={'space-around'}>
                <Logo>
                    <Icon iconId='logo'/>
                    <Title>Portfolio</Title>
                </Logo>
                <HeaderMenu menuItems={menuItems}/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #d07474;
`

const Logo = styled.div``

const Title = styled.span``

