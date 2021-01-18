import styled from "styled-components";

export const Section = styled.section`
  margin: 1rem auto;
  padding: 1rem;
  width: 100%;
  max-width: 45rem;

  border: 1px solid #d2d1d1;
  background-color: #fff;
  box-shadow: 0px 0.25rem 1rem rgba(0, 0, 0, 0.25);
`;
export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`;

export const InputTaskName = styled.textarea`
  width: 100%;
  border: 1px solid #cacaca;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.span`
  margin-left: 6px;
`;

export const ButtonAddTask = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid transparent;
  background-color: #2199e8;
  cursor: pointer;

  color: #fff;
  font-weight: bold;
  font-size: 1rem;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
`;

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
  padding: 10px;

  background-color: #ec5840;
  border-color: transparent;
  color: #fff;

  cursor: pointer;
`;

export const TaskContainer = styled.div`
  padding-right: 20px;
`;
