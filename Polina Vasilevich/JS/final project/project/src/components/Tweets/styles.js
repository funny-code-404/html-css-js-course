import styled from "styled-components";

export const Tweets = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 55% 40%;
  grid-gap: 6.5%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  background-size: cover;
  background-position: center center;

  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
`;

export const ButtonAside = styled.button`
  position: absolute;
  top: 110px;
  right: 10vw;
  z-index: 1;

  font-size: 25px;
  color: #999999;
  background-color: transparent;
  border-color: transparent;
  outline: none;

  cursor: pointer;
`;
