import styled from "styled-components";

export const Text = styled.p`
  font-family: OpenSans;
  font-size: 30px;
  line-height: 36px;
  font-weight: 300;
  color: #ffffff;

  @media (max-width: 1680px) {
    width: 50%;
    text-align: center;
  }
  @media (max-width: 1100px) {
    width: 100%;
    text-align: center;
  }
`;
