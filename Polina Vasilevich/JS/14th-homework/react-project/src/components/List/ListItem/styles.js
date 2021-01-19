import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);

  overflow-wrap: break-word;
`;

export const ButtonCross = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 10px 15px;

  background-color: #ec5840;
  border-color: transparent;
  color: #fff;

  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #da3116
  }

  &:active {
    box-shadow: 0 0 5px #da3116;
  }
`;

export const TaskContainer = styled.div`
  padding-right: 20px;
`;
