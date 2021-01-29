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
  color: #333333;
`;

export const SubTitle = styled.p`
  ${generalStyles}
  margin-bottom: 26px;
  font-size: 18px;
  line-height: 36px;
  font-weight: 300;
  color: #999999;
  line-height: 36px;
`;

export const Text = styled.p`
  ${generalStyles}
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #575757;
  margin-bottom: 39px;
`;

export const Line = styled.div`
  ${generalStyles}
  margin-bottom: 30px;
  width: 100px;
  height: 1px;
  background-color: #000000;
  background-image: linear-gradient(90deg, #00f0ff -25%, #ebacfd 125%);
`;

const positionBlock = (position) => {
  switch (position) {
    case "rigth":
      return `
                margin-left: auto;
            `;
    case "center":
      return `
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
        `;
    default:
      return ``;
  }
};

export const TextContainer = styled.div`
  ${(props) => positionBlock(props.position)};
`;
