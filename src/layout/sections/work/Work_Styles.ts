import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../style/Common";
import {theme} from "../../../style/Theme";

const Work = styled.section`
  padding-top: 20px;
  ${FlexWrapper}{
    gap: 24px;
  }
`

const Label = styled.label`
  ${font({Fmax: 16, Fmin: 18, weight:700})};
  text-transform: uppercase;
  @media ${theme.media.tablet}{
    text-transform: capitalize;
  }
`

const LabelIcon = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  
  @media ${theme.media.tablet}{
    margin-bottom: 39px;
  }

`

const WorkPhoto = styled.img`
  width: 612px;
  height: 888px;
  
     @media ${theme.media.tablet}{
       width: 366px;
       height: 600px;
     }
`

const Link = styled.a`
  font-size: 40px;
  font-weight: 700;
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const WorkPhotoWrapper = styled.div`
  position: relative;

  & + & {
    margin-top: 24px;
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 5px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
    }
  ;

    ${Link} {
      opacity: 1;

    }
  }
`

const Column = styled.div`
  flex-direction: column;
  
  @media screen and (min-width: 1298px){
    &:last-child {
      margin-top: 138px;
    }
  }
`

export const S = {
    Work,
    Label,
    LabelIcon,
    WorkPhoto,
    Link,
    WorkPhotoWrapper,
    Column
}