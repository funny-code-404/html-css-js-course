import styled from "styled-components";
import { Icon } from "../Icon/styles";
const styleFont = `
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  color: #fff;
  // text-transform: uppercase;
  
`;

const setWidthButton = (widthButton) => {
  switch (widthButton) {
    case "basic":
      return `width: 270px;`;
    case "auto":
      return `
        width: auto;
        padding: 0 15px;
        height: 40px !important;
      `;
    case "s":
      return `width: 201px;`;

    case "m":
      return `width: 15vw;`;

    case "form":
      return `width: 26vw;`;

    case "tweets":
      return `width: 17vw;`;

    default:
      return `width: 270px;`;
  }
};

const setColorTextButton = (colorTextButton) => {
  switch (colorTextButton) {
    case "linkBlue":
      return `
              color: #4285F4;
              ${Icon} {
                color: #4285F4;
              }
            `;
    case "linkGrey":
      return `
        color: #999999;
        ${Icon} {
                color: #4285F4;
              }
            
        `;

    default:
      return ``;
  }
};

const setTypeButton = (typeButton) => {
  switch (typeButton) {
    case "link":
      return ` background-color: transparent;
      border: transparent;
      width: auto !important;
      height: auto !important;
      margin-right: 20px;

      :hover{
        color: #4285f4;
      }
    `;

    default:
      break;
  }
};

const setStylesButton = (stylesButton) => {
  switch (stylesButton) {
    case "basic":
      return `
        background-color: #4285f4;
        border: 1px solid #2c6cd6;
      `;

    case "link":
      return ` 
      background-color: transparent ;
      border: transparent;
      width: auto !important;
      height: auto !important;
      margin-right: 20px;
      text-transform: none;
      
      :hover{
        color: #4285f4;
      }
    `;

    case "priceTable":
      return `
          width: 50%;
          background-color: #4285f4;
          border: 1px solid #2c6cd6;
          :hover {
            background-color: #82B440;
            border: 1px solid #fff;
          }
          
        `;

    case "sliderTransparent":
      return `
              width: 200px;
              background-color: transparent;
              border: 1px solid #fff;
              margin-left: 10px;
              margin-right: 10px;

              &:hover {
                color: rgb(66, 133, 244);
              }
            `;

    case "grey":
      return `
      color: #999999 ;
      background-color: #f6f7f8;
      border: 1px solid #e6e6e6;
      margin-right: 10px;
      margin-top: 12px !important;

      :hover{
        color: #000;
      }
        `;

    case "blue":
      return `
      background-color: #37ceff;
      border: 1px solid #fff;
        `;

    case "portfolio":
      return `
          font-family: OpenSans;
          font-size: 16px;
          line-height: 30px;
          font-weight: 300;
          color: #ffffff;
          opacity: 0.5;
          margin: 0;

          background-color: transparent;
          border: transparent;
          width: auto !important;
          height: auto !important;

          :hover{
            color: #4285f4;
          }
            `;

    case "postInfo":
      return `
      margin: 0;
      margin-left: 1vw;
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      color: #999999 !important;
      background-color: #ffffff;
      border: 1px solid #e8e8e8;
      :hover {
         box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.07);
         color: #000 !important;
      }
        `;

    case "work":
      return `
          background-color: #82b440;
   
            `;

    case "intro":
      return ` margin-top: 50px;`;

    default:
      return `
        width: 270px;
        background-color: #4285f4;
        border: 1px solid #2c6cd6;
      `;
  }
};

export const Button = styled.button`
  margin-top: 15px;
  display: inline-block;
  ${styleFont};

  ${(props) => setWidthButton(props.widthButton)};
  height: 55px;
  border-radius: 3px;
  outline: none;

  ${(props) => setTypeButton(props.typeButton)};
  ${(props) => setColorTextButton(props.colorTextButton)};
  ${(props) => setStylesButton(props.stylesButton)};
  cursor: pointer;
  :hover {
    transition: all 0.2s ease-in-out;
  }
`;
