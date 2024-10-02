import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../style/Theme";

const Projects = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 24px;
  }
`

const ProjectPhoto = styled.img`
  width: 400px;
  height: 560px;
  
  @media ${theme.media.tablet}{
    width: 366px;
    height: 600px;
  }
`

export const S = {
    Projects,
    ProjectPhoto
}