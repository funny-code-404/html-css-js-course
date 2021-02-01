import styled from 'styled-components';


export const Title = styled.h3`
    margin-bottom: 16px;
    font-family: OpenSans;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    color: ${props => props.colorTitle ? props.colorTitle : '#fff'};
`
export const PercentsContainer = styled.div`
    margin-bottom: 42px;
    height: ${props => props.heightContainer ? props.heightContainer : '10px'};
    background-color: ${props => props.backgroundColorContainer ? props.backgroundColorContainer : '#131313'};
`

export const PercentsItem = styled.div`
    height: ${props => props.heightItem ? props.heightItem : '10px'};
    background-color: ${props => props.backgroundColorItem ? props.backgroundColorItem : '#ffffff'};
    background-image: linear-gradient(90deg, #00f0ff -24%, #ebacfd 125%);
`
