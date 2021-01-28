import styled, {css} from 'styled-components';

const positionBlockRight = css`
    margin-left: auto;
`

export const ContentContainer = styled.div`
    width: 50%;
    ${props => props.positionBlockRight ? positionBlockRight : ''}
`