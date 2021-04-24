import styled from "styled-components";

export const Pagination = styled.div`
  font-family: OpenSans;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
export const Button = styled.button`
  margin-left: 10px;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #999999;

  width: 80px;
  height: 30px;
  background-color: #f7f7f7;
  border: 1px solid #ececec;
  border-radius: 3px;

  outline: none;
  cursor: pointer;

  &.inVisibleButton {
    opacity: 0;
    // transition: opacity 0.3s ease;
  }
`;

export const NumberPage = styled.button`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #ececec;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #999999;

  &.activePage {
    background-color: #4285f4;
    border-radius: 3px;
    color: #fff;
  }
`;
