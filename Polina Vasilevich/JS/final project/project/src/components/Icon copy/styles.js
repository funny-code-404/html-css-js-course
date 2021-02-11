import styled from "styled-components";

const setColorIconContainer = (colorIconContainer) => {
  switch (colorIconContainer) {
    case "gradient":
      return `
              background-image: linear-gradient(48deg, #00f0ff -22%, #ebacfd 122%)

            `;

    default:
      return "";
  }
};

const setFormIcon = (formIcon) => {
  switch (formIcon) {
    case "circle":
      return `
              border-radius: 50%;
            `;
    case "rectangle":
      return `      
              width: 100%;
              height: 40px;
              border-radius: 3px;
            `;
    default:
      return "";
  }
};

const setSizeIconContainer = (sizeIconContainer) => {
  switch (sizeIconContainer) {
    case "small":
      return `      
                    width: 50px;
                    height: 50px;
        
            `;
    case "middle":
      return `      
                    width: 150px;
                    height: 150px;
            `;
    default:
      return "";
  }
};

export const IconContainer = styled.div`
  ${(props) => setFormIcon(props.formIcon)}; 
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  ${(props) => setFormIcon(props.formIcons)};
  ${(props) => setColorIconContainer(props.colorIconContainer)};
  ${(props) => setSizeIconContainer(props.sizeIconContainer)};
  
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  cursor: pointer;
`;


const setColorIcon = (colorIcon) => {
  switch (colorIcon) {
    case "gradient":
      return `
                    display: inline-block;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-image: linear-gradient(48deg, #00f0ff -21%, #ebacfd 121%);
            `;

    default:
      return `
        color: #fff;
      `;
  }
};

const setFontSizeIcon = (fontSizeIcon) => {
  switch (fontSizeIcon) {
    case "s":
      return `
        font-size: 18px;
        `;

    case "m":
      return `
        font-size: 20px;
      `;

    case "l":
      return `
        font-size: 36px;
      `;

    case "xl":
      return `
        font-size: 44px;
        
      `;

    case "xxl":
      return `
        font-size: 72px;
      `;
        
    default:
      return `
        font-size: 36px;
      `;
  }
};


export const Icon = styled.i`
  font-family: themify;
  // line-height: 30px;
  font-weight: 400;
  ${(props) => setFontSizeIcon(props.fontSizeIcon)};
  ${(props) => setColorIcon(props.colorIcon)};
`;


const setPositionIcons = (positionIcons) => {
  switch (positionIcons) {
    case "left":
      return `
        display: flex;
        ${IconContainer} {
            align-items: start;
            margin-right: 20px;
        } 
      `;
    default:
      return ``;
  }
};

export const ContentContainer = styled.div`
  ${(props) => setPositionIcons(props.positionIcons)};
`;
