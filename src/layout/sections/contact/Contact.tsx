import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact Me</SectionTitle>
            <Title>If you are looking to hire a product designer,
                I’m currently available for freelance work</Title>
            <Button></Button>
        </StyledContact>
    );
};

const StyledContact = styled.section``

const Title = styled.p``


