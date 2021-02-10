import styled from "styled-components";

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
