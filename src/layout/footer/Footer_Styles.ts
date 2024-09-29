import styled from "styled-components";
import {theme} from "../../style/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer = styled.footer`
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

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
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

export const S = {
    Footer,
    Copyright,
    StyledIconsList,
    ListItem,
    LinkItem
}