import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {font} from "../../../style/Common";
import {theme} from "../../../style/Theme";

const Contact = styled.section`
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

export const S = {
    Contact,
    TitleWrapper,
    Title
}