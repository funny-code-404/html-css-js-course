import styled, { css } from "styled-components";

const generalStyles = `
    font-family: OpenSans;
    font-weight: 300;
    margin-bottom: 20px;
`;
export const Section = styled.section`
  margin: 100px 0;
  ${(props) =>
    props.backgroundImage &&
    `
    background-size: cover;
    background-position: center center;
    `};

  height: ${(props) => (props.height ? props.height : "auto")};
`;
export const Wrapper = styled.div`
  padding: ${(props) =>
    props.paddingLeftRight ? props.paddingLeftRight : "0 19%"};
`;

export const TextContainer = styled.div`
  width: 530px;
  margin: 67px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  ${generalStyles}

  font-size: 36px;
  line-height: 30px;
  color: #333333;
`;

export const SubTitle = styled.p`
  ${generalStyles}
  font-size: 18px;
  line-height: 36px;
  color: #999999;
`;

export const Line = styled.div`
  ${generalStyles}
  margin-bottom: 30px;
  width: 100px;
  height: 1px;
  background-color: #000000;
  background-image: linear-gradient(90deg, #00f0ff -25%, #ebacfd 125%);
`;
