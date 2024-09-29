import React from 'react';
import styled from "styled-components";
import {theme} from "../style/Theme";
import Icon from "./icon/Icon";

export const Button: React.FC = () => {
    return (
        <StyledButton>
            <Icon iconId={'mail'} height={'16'} width={'24'} viewBox={'0 0 16 21'}/>
            <Title>hi@yourname.com</Title>
        </StyledButton>
    );
};

const StyledButton = styled.button`
  width: 300px;
  height: 57px;
  background-color: ${theme.colors.button};
  border: none;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  gap: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.p``