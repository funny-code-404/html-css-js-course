import styled from "styled-components";

export const Aside = styled.aside`
  position: relative;
  z-index: 2;

  padding: 0 25px;

  &.inVisible {
        visibility: hidden,
        opacity: 0,
  }
`;

export const Search = styled.input`
  width: 17vw;
  height: 50px;
  text-indent: 20px;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  outline: none;

  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #575757;
  margin-bottom: 60px;
`;

export const Arrow = styled.div`
  cursor: pointer;
  position: absolute;
  top: 66px;
  right: 20vw;
  z-index: 1;

  border-top: 30px solid transparent;
  border-right: 30px solid #e3e3e3;
  border-bottom: 30px solid transparent;
  border-left: 30px solid transparent;

  outline: none;
`;
