import styled from "styled-components";
import image from "../../assets/background.png";

export const BannerComponent = styled.div`
  padding: 30px 0;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  color: white;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;
export const Text = styled.p`
  width: 50%;
  text-align: center;
`;
