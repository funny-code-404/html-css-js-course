import styled from 'styled-components';

export const Img = styled.div`
    height: ${props => props.heightImg ? props.heightImg : '420px'};
    // border: 1px solid black; 
    background-size: cover;
    background-position: center center;
    background-image: ${props => props.backgroundImg ? `url(${props.backgroundImg})` : ''};
`