import styled from "styled-components";

const setHeightSliderContainer = (heightSliderContainer) => {
  switch (heightSliderContainer) {
    case "slider1":
      return `height: 994px`;
    case "slider2":
      return `height: 800px`;

    default:
      break;
  }
};

export const SlidersContainer = styled.div`
  position: relative;
  margin: auto;

  ${(props) => setHeightSliderContainer(props.heightSliderContainer)}
`;
export const Img = styled.div`
  width: 100%;
  position: absolute;
  opacity: 0;
  z-index: 0;
  transition: transform ease 0.5s, opacity ease 0.5s;
  height: inherit;
  background-size: cover;
  background-position: center center;
  ${(props) =>
    props.backgroundImg && `background-image: url(${props.backgroundImg});`};

  position: absolute;
  opacity: 1;
  z-index: 1;
  transition: transform ease 0.5s, opacity ease 0.5s;

  &.opacity {
    opacity: 0;
    z-index: 0;
  }
`;

const stylesButton = `
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 0;
  top: 50%;
  width: auto;
  margin: -22px 30px;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  transition: 0.6s ease;

  background-color: transparent;
  border-color: transparent;
  outline: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
    }
`;

export const ArrowNext = styled.button`
  ${stylesButton};
  right: 0;
`;
export const ArrowPrev = styled.button`
  ${stylesButton};
`;
export const DotsContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
export const Dot = styled.button`
  cursor: pointer;
  width: 14px;
  height: 14px;
  opacity: 0.5;
  background-color: #000;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;

  outline: none;
  border: none;

  transition: background-color 0.6s ease;

  :hover {
    background-color: tomato;
  }
  &.active {
    opacity: 1;
    background-color: tomato !important;
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 897px) {
    transform: translate(-30%, -10%);
  }
`;
