import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {theme} from "../../../style/Theme";

export const Contact = () => {
    return (
        <StyledContact>
                <SectionTitle>Contact Me</SectionTitle>
                <Title><p>If you are looking to hire a product designer,</p>
                    <p>I’m currently available for freelance work</p></Title>
                <Button></Button>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  button {
    margin: 0 auto;
  }
  padding-bottom: 124px;
  
`

const Title = styled.p`
  color: ${theme.colors.secondFont};
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 48px;
  
`


