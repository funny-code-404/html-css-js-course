import styled from "styled-components";

export const Article = styled.article`
  width: 80%;
  margin: 30px auto;
  padding: 20px 0;
  background-color: #e4fdf9;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
`;
export const Text = styled.p`
  width: 80%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px;
  background-color: transparent;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

export const DateText = styled.p`
  font-size: 1rem;
  font-style: italic;
`;
