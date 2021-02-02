import styled from 'styled-components';

export const GridItem = styled.div`
    height: 441px;
    background-size: cover;
    background-position: center center;

    &:nth-of-type(3) {
        grid-column: 1 / 3;
      }
`
