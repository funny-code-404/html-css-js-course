import styled from 'styled-components';

export const GridItem = styled.div`
    background-size: cover;
    background-position: center center;
  
    position: relative;

    // height: ${props => props.height ? props.height : '420px'};

    &:nth-of-type(1) {
        grid-row: 1 / 3;
        height: 730px;
      }

`