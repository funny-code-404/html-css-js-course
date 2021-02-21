import styled from "styled-components";

export const Posts = styled.div`
  position: relative;

  .isInVisible {
    width: 100%;
  }
`;

export const Arrow = styled.button`
  cursor: pointer;
  // width: 50px;
  // height: 50px;
  // transform: rotate(45deg);

  position: absolute;
  top: 20px;
  right: -3vw;
  font-size: 25px;
  color: #999999;
  z-index: 1;

  transition: 0.6s ease;
  outline: none;

  background-color: transparent;
  border-color: transparent;
`;
