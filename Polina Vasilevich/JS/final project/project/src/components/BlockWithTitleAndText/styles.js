import styled, { css } from "styled-components";

const generalStyles = css`
  font-family: OpenSans;
`;

export const Title = styled.h2`
  ${generalStyles}
  margin-bottom: 29px;
  font-size: 36px;
  line-height: 30px;
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : "#333333")};
`;

export const SubTitle = styled.p`
  ${generalStyles}
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 36px;
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : "#999999")};
`;

export const Text = styled.p`
  ${generalStyles}
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : "#575757")};
`;

export const Line = styled.div`
  ${generalStyles}
  display: inline-block;
  margin-bottom: 20px;
  width: 100px;
  height: 1px;
  background-color: #000000;
  background-image: linear-gradient(90deg, #00f0ff -25%, #ebacfd 125%);
`;

export const TextContainer = styled.div``;
