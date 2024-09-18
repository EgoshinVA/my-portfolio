import styled from "styled-components";

type flexWrapperPropsType = {
    direction?: string,
    align?: string,
    justify?: string,
    wrap?: boolean,
}

export const FlexWrapper = styled.div<flexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`