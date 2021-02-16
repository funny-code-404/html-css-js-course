import styled from "styled-components";

const setSizeInput = (sizeInput) => {
  switch (sizeInput) {
    case "tweets":
      return `
        width: 20vw;
        height: 51px;
        ${Form} {
          align-items: start;
        }
      `;

    default:
      return `
        width: 30vw;
        height: 61px;

      `;
  }
};

const styles = `
  margin-bottom: 19px;

  font-family: OpenSans;
  font-size: 16px;
  outline: none;
  background-color: inherit;
  border-radius: 3px;
  
`;

export const ItemFrom = styled.input`
  ${styles};
  color: ${(props) =>
    props.colorTextInput ? props.colorTextInput : "#999999"};
  border: 1px solid
    ${(props) => (props.borderColorInput ? props.borderColorInput : "#999999")};
`;

export const Select = styled.select`
  ${styles};
  cursor: pointer;
  color: ${(props) =>
    props.colorTextInput ? props.colorTextInput : "#999999"};
  border: 1px solid
    ${(props) => (props.borderColorInput ? props.borderColorInput : "#999999")};
`;

export const Option = styled.option``;

export const Info = styled.span`
  font-family: OpenSans;
  font-size: 14px;
  line-height: 36px;
  font-weight: 300;
  color: #666666;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ItemFrom} {
    ${(props) => setSizeInput(props.sizeInput)};
  }

  ${Select} {
    ${(props) => setSizeInput(props.sizeInput)};
  }
`;
