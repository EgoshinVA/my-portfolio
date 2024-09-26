import React from 'react';
import styled from "styled-components";
import {theme} from "../../style/Theme";

type headerMenuPropsType = {
    menuItems: Array<string>
}

export const HeaderMenu = (props: headerMenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <StyledList>
                {props.menuItems.map((item, index) =>
                    <li key={index}>
                        <a href=''>
                            {item}
                        </a>
                    </li>
                )}
            </StyledList>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.div`
  @media ${theme.media.tablet} {
    display: none;
  }
`

const StyledList = styled.ul`
  display: flex;
  gap: 60px;
`