import styled from "styled-components";

export const Tweets = styled.div`
  display: grid;
  grid-template-columns: 55% 40%;
  grid-gap: 6.5%;

  @media (max-width: 1030px) {
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

export const InVisible = styled.div`
  border-top: 30px solid transparent;
  border-right: 30px solid #f7f7f7;
  border-bottom: 30px solid transparent;
  border-left: 30px solid transparent;

  transition: 0.6s ease;
  outline: none;
`;
