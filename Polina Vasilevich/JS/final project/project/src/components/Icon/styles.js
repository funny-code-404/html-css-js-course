import styled from "styled-components";

const gradientColorFormIcon = `
    background-image: linear-gradient(48deg, #00f0ff -22%, #ebacfd 122%);
`

export const IconContainer = styled.div`
      width: 100%;
      background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
      ${props => setFormIcon(props.formIcons)};
      ${props => props.gradientColorFormIcon && gradientColorFormIcon};
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 25px;
`

const setFormIcon = formIcons => {
    switch(formIcons) {
        case 'circle': 
            return `
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;

                    :hover {
                        background-image: none;
                        background-color: #69d2e7;
                    }

                    cursor: pointer;
            `;
        case 'rectangle':
            return `
                    height: 40px;
                    border-radius: 3px;
            `;
        default:
            return '';
    }
}

const setColorIcon = colorIcon => {
    switch(colorIcon) {
        case 'gradient': 
            return `
                    display: inline-block;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-image: linear-gradient(48deg, #00f0ff -21%, #ebacfd 121%);

            `;

        default:
            return '';
    }
}


export const Icon = styled.i`
    font-family: themify;
    font-size: ${props => props.fontSizeIcon ? props.fontSizeIcon : '36px'};
    color: #fff;
    ${props => setColorIcon(props.colorIcon)};
`;

