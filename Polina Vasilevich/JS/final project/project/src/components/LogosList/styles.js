import styled from "styled-components";

export const ContentContainer = styled.div`
  opacity: 0.24;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 1;
  }
`;

const setStylesGridContainer = (stylesGridContainer) => {
  switch (stylesGridContainer) {
    case "home":
      return `grid-template-columns: repeat(4, 1fr); 
              row-gap: 70px;
              column-gap: 2%;

              @media(max-width: 1200px) {
                grid-template-columns: repeat(2, 1fr);
               
              }
              

              `;
    case "demos":
      return `grid-template-columns: repeat(8, 1fr); 
              column-gap: 2%;
              @media(max-width: 1400px) {
                grid-template-columns: repeat(4, 1fr);
                row-gap: 70px;
              }
              @media(max-width: 756px) {
                grid-template-columns: repeat(3, 1fr);
              }

              ${ContentContainer} {
                opacity: 1;
                @media(max-width: 1400px) {
                  :nth-of-type(n + 5) {
                    display: none;
                  }
                }
                @media(max-width: 756px) {
                  :nth-of-type(4) {
                    display: none;
                  }
                  
                }
              }
              `;

    default:
      break;
  }
};

export const GridContainer = styled.div`
  width: 100%;
  display: grid;

  justify-content: space-between;

  ${(props) => setStylesGridContainer(props.stylesGridContainer)};
`;

export const Logo = styled.img`
  cursor: pointer;
`;
