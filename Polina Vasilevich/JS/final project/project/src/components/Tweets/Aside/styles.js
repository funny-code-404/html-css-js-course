import styled from "styled-components";

export const Aside = styled.aside`
  position: relative;
  z-index: 2;

  //   background-color: #f7f7f7;
  padding: 0 25px;

  .isInVisible {
    display: none;
  }
`;

export const Search = styled.input`
  width: 17vw;
  height: 50px;
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
