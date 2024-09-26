import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../style/Theme";

type mobileMenuPropsType = {
    menuItems: Array<string>
}

export const MobileMenu = (props: mobileMenuPropsType) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <StyledPopup isOpen={false}>
                <Menu>
                    {props.menuItems.map((item, index) =>
                        <li key={index}>
                            <a href=''>
                                {item}
                            </a>
                        </li>
                    )}
                </Menu>
            </StyledPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.div`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }

`

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

const Menu = styled.ul``