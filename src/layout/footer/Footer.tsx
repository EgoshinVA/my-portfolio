import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>Made by Your Name — Copyright 2021</Copyright>
            <StyledIconsList>
                <ListItem><LinkItem href=""><Icon iconId='whatsapp'/></LinkItem></ListItem>
                <ListItem><LinkItem href=""><Icon iconId='ball'/></LinkItem></ListItem>
                <ListItem><LinkItem href=""><Icon iconId='link'/></LinkItem></ListItem>
                <ListItem><LinkItem href=""><Icon iconId='twitter'/></LinkItem></ListItem>
                <ListItem><LinkItem href=""><Icon iconId='be'/></LinkItem></ListItem>
            </StyledIconsList>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
  justify-content: space-between;
`

const Copyright = styled.small``

const StyledIconsList = styled.ul`
    display: flex;
`

const ListItem = styled.li``

const LinkItem = styled.a``


