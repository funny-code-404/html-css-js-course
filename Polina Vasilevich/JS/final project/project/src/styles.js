import styled from 'styled-components';

const setNumberColumns = props => `grid-template-columns: repeat(${props.numberColumns}, 1fr)`;

const setColorText = colorText => {
    switch(colorText) {
        case 'white':
            return `
                color: #fff;
            `
        case 'gradient':
            return `
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            background-image: linear-gradient(48deg, #00f0ff -21%, #ebacfd 121%);
            `
        default:
            return `
                color: #000;
            `
    }
}

export const GridContainer = styled.div`
    display: grid;
    grid-column-gap: ${props => props.columnGap ? props.columnGap : 0};
    ${setNumberColumns};
    ${props => setColorText(props.colorText)};
`
