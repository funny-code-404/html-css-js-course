import styled from "styled-components";

export const Posts = styled.div`
  position: relative;
  z-index: 2;
  .inVisible {
    width: 100%;
  }
`;

export const Arrow = styled.button`
  cursor: pointer;
  // width: 50px;
  // height: 50px;
  // transform: rotate(45deg);

  position: absolute;

  right: -7vw;
  font-size: 25px;
  color: #999999;
  z-index: 1;

  transition: 0.6s ease;
  outline: none;

  background-color: transparent;
  border-color: transparent;
`;

export const Icon = styled.a`
  text-decoration: none;
  font-family: themify;
  font-size: 13px;
  line-height: 30px;
  font-weight: 400;
  color: #666666;
  padding: 10px;

  :hover {
    color: #55d0fe;
  }
`;
