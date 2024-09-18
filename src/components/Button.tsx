import React from 'react';
import styled from "styled-components";

export const Button = () => {
    return (
        <StyledButton>
            <Title>egoshinvit@gmail.com</Title>
        </StyledButton>
    );
};

const StyledButton = styled.button`
max-width: 300px;
`

const Title = styled.span``