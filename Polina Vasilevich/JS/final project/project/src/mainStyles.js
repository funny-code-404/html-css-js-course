import styled from 'styled-components';

const widthItemGridContainer = props => props.widthItemGridContainer ? props.widthItemGridContainer : '200px';

export const GridContainer = styled.div`
    display: grid;
    grid-gap: ${props => props.gridGap ? props.gridGap : '10px'};
    grid-template-columns: repeat(auto-fit, minmax(${widthItemGridContainer}, 1fr));
    justify-content: space-between;
`

const paddingTopBottom = (props) =>
  props.paddingTopBottom ? props.paddingTopBottom : '100px';

const paddingLeftRight= (props) =>
  props.paddingLeftRight ? props.paddingLeftRight : '19%';

export const Wrapper = styled.div`
  padding: ${paddingTopBottom} ${paddingLeftRight};
`;

export const MainContainer = styled.div`
    height: 100%;
    background-color: ${props => props.backgroundColorMainContainer ? props.backgroundColorMainContainer : ''};
`