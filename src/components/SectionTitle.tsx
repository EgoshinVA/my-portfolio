import styled from "styled-components";
import {theme} from "../style/Theme";
import {font} from "../style/Common";

export const SectionTitle = styled.h2`
  ${font({weight: 700, Fmax:36, Fmin:28})}
  text-align: center;
  padding: 240px 0 65px;

  @media ${theme.media.tablet} {
    padding: 200px 0 34px;
  }
  
`