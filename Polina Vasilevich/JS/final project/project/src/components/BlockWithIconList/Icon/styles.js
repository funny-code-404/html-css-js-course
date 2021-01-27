import styled, {css} from 'styled-components';

const generalStyles = css`
    margin-bottom: 15px;
    font-family: OpenSans;
    line-height: 30px;
`
export const Title = styled.h2`
    ${generalStyles}
    font-size: 18px;
    font-weight: 600;
    color: #333333;
`

export const Text = styled.p`
      ${generalStyles}
      font-size: 14px;
      font-weight: 400;
      color: #575757;
`

const gradientColor = css`
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(48deg, #00f0ff -21%, #ebacfd 121%);
`

export const Icon = styled.i`
    ${generalStyles}
    font-family: themify;
    font-weight: 400;
    font-size: ${props => props.bigFontSize ? '44px' : '36px'}; 

    // color: ${props => props.colorTextWhite ? '#fff' : 'black'};
    // ${props => props.colorTextGradient ? gradientColor: 'black'} 
`


