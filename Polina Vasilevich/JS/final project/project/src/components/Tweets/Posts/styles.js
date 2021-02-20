import styled from "styled-components";

export const Posts = styled.div`
  //   margin-right: 3%;
  position: relative;
  width: 60%;

  .isInVisible {
    width: 100%;
  }
`;

export const Arrow = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);

  position: absolute;
  top: 20px;
  right: -5vw;

  z-index: 1;

  transition: 0.6s ease;
  outline: none;

  background-color: #f7f7f7;
  border-color: transparent;
`;
