import styled from "styled-components";
import { Button } from "../../Button/styles";

export const Posts = styled.div`
  position: relative;
  z-index: 2;
  .inVisible {
    width: 100%;
  }

  ${Button} {
    .postInfo {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      color: #999999;
      background-color: #ffffff;
      border: 1px solid #e8e8e8;

      :hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.07);
      }
    }
  }
`;

export const PostsItem = styled.div`
  margin-bottom: 70px;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 53px;
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

  transition: all 0.2s ease-in-out;
  outline: none;

  background-color: transparent;
  border-color: transparent;

  @media (max-width: 1030px) {
    display: none;
  }
`;
