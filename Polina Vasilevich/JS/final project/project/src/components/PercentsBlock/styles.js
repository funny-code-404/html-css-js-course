import styled from 'styled-components';

export const PercentsContainer = styled.div`
    margin-bottom: 42px;
    height: ${props => props.heightContainer ? props.heightContainer : '100%'};
    background-color: ${props => props.backgroundColorContainer ? props.backgroundColorContainer : '#131313'};
    border: 1px solid grey;
`

export const PercentsItem = styled.div`
    height: ${props => props.heightItem ? props.heightItem : '10px'};
    // background-color: ${props => props.backgroundColorItem ? props.backgroundColorItem : '#131313'};
    ${props => props.backgroundColorItem && `border: 1px solid ${props.backgroundColorItem}`}
    background-image: linear-gradient(90deg, #00f0ff -24%, #ebacfd 125%);
`
