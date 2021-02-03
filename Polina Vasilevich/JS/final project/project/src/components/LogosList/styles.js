import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 30px 10px;
  width: 20%;
  opacity: 0.24;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 1;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  ${props => props.oneString && `
    padding: 0 5%;
    flex-wrap: nowrap;
    justify-content: space-between;
    ${ContentContainer} {
      justify-content: start;
      padding: 30px 0;
    }

    :hover {
      opacity: 1;
    }
    
  `}
`;

export const Logo = styled.img`
  cursor: pointer;
`;