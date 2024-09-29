import styled, {css} from "styled-components";
import {theme} from "../../style/Theme";

// header

const Header = styled.header`
  background-color: ${theme.colors.secondaryBg};
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  
  @media ${theme.media.tablet}{
    height: 72px;
  }
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

//headerMenu

const HeaderMenu = styled.div`
  ul {
    display: flex;
    gap: 60px;
  }
`

//mobileMenu

const MobileMenu = styled.div``

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 72px;
  height: 72px;
  z-index: 999999;
  background-color: rgba(255, 255, 255, 0);
  border: none;

  span {
    display: block;
    width: 21px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    top: 28px;
    right: 24px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 21px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-7px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 21px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(7px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const StyledPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background-color: ${theme.colors.secondaryBg};
  display: none;
  justify-content: center;
  align-items: center;
  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
  `}
`

export const S = {
    Header,
    Logo,
    Title,
    HeaderMenu,
    MobileMenu,
    BurgerButton,
    StyledPopup
}