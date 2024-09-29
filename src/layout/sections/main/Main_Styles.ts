import styled from "styled-components";
import {theme} from "../../../style/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../style/Common";

const Main = styled.section`
  padding: 210px 0 145px;
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    padding: 144px 0 128px;
  }
`

const MainTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media ${theme.media.tablet}{
    align-items: center;
  }
`

const MainText = styled.span`
  ${font({weight: 500, Fmax: 20, Fmin: 18})}
  color: ${theme.colors.secondFont};
  margin: 24px 0 88px;
  @media ${theme.media.tablet} {
    text-align: center;
    margin: 20px 0 48px;
  }
`

const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 54, Fmin: 36})}
  margin-top: 31px;
  @media ${theme.media.tablet} {
    text-align: center;
    margin-top: 64px;
  }
`

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin-right: 106px;

  @media ${theme.media.tablet} {
    width: 240px;
    height: 240px;
    margin-right: 0;
  }
`

export const S = {
    Main,
    MainTextBlock,
    MainText,
    MainTitle,
    Image
}