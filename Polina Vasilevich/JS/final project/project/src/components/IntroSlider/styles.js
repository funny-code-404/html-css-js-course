import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 990px;
  background-color: #3c444b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  background-image: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg})` : ""};
  background-size: cover;
  background-position: center center;
`;

export const TextContainer = styled.div`
  display: inline-block;
`;

export const Title = styled.h1`
  margin-bottom: 26px;
  font-family: CenturyGothic;
  font-size: 80px;
  line-height: 60px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-transform: uppercase;
`;

export const SubTitle = styled.p`
  font-family: OpenSans;
  font-size: 30px;
  line-height: 30px;
  font-weight: 300;
  color: #ffffff;
`;

export const Arrow = styled.button`
  width: 60px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);

  z-index: 2;

  color: #fff;
  font-weight: bold;
  font-size: 25px;

  transition: 0.6s ease;
  outline: none;

  opacity: 0.3;
  background-color: #000;
  border-color: transparent;
  border-radius: 3px;

  :hover {
    opacity: 0.5;
  }
`;
