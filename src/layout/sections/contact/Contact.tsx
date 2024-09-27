import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {theme} from "../../../style/Theme";
import {font} from "../../../style/Common";
import {Container} from "../../../components/Container";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <TitleWrapper>
                    <Title>If you are looking to hire a product designer,
                        I’m currently available for freelance work</Title>
                </TitleWrapper>

                <Button></Button>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  button {
    margin: 0 auto;
  }
  
  ${SectionTitle}{
    padding: 240px 0 24px;
  }
  
  

  padding-bottom: 124px;

`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.p`
  ${font({weight: 600, Fmax: 26, Fmin: 18})}
  color: ${theme.colors.secondFont};
  text-align: center;
  margin-bottom: 48px;
  max-width: 600px;


  @media ${theme.media.tablet} {
    margin-bottom: 38px;
  }

`


