import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import laptop from '../../../assets/images/laptop.png'
import mac from '../../../assets/images/mac.png'
import work from '../../../assets/images/work.png'
import phone from '../../../assets/images/phone.png'


export const Work = () => {
    return (
        <StyledWork>
            <Label>Featured Work</Label>
            <FlexWrapper wrap justify={'center'}>
                <WorkPhoto src={laptop}/>
                <WorkPhoto src={mac}/>
                <WorkPhoto src={work}/>
                <WorkPhoto src={phone}/>
            </FlexWrapper>

        </StyledWork>
    );
};

const StyledWork = styled.section`
  min-height: 100vh;
  background-color: #f8d280;
`

const Label = styled.label``

const WorkPhoto = styled.img`
  width: 612px;
  height: 888px;
  margin: 12px;
`