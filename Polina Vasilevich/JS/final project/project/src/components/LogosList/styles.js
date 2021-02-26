import styled from "styled-components";

export const ContentContainer = styled.div`
  opacity: 0.24;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 1;
  }

  @media (max-width: 1500px) {
    :nth-of-type(n + 5) {
      grid-row: 2;
    }
  }

  @media (max-width: 860px) {
    :nth-of-type(4) {
      display: none;
    }
    :nth-of-type(5) {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-content: space-between;
  grid-gap: 10px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
