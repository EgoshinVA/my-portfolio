import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../style/Theme";
import {SectionTitle} from "../../../components/SectionTitle";

const Visual = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 24px;

    @media ${theme.media.tablet} {
      gap: 16px;
    }
  }

  ${SectionTitle} {
    @media ${theme.media.tablet} {
      padding: 116px 0 34px;
    }
  }

`

const Picture = styled.img`
  max-width: 400px;
  width: 366px;
  flex-grow: 1;
  aspect-ratio: 1 / 1;
`

export const S = {
    Visual,
    Picture
}