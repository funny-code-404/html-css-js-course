import styled from "styled-components";

export const Header = styled.header`
  padding: 30px 15%;
  height: 90px;
  background-color: #ffffff;
  
  display: flex;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  margin-left: 10px;
  font-size: 13px;
`;

export const LogoContainer = styled.div`
  width: 40%;
  display: flex;
`;

export const LogoImg = styled.img`
  width: 64px;
  height: 30px;
`;

export const LogoText = styled.h2`
  Text: thefox business;
  font-family: FuturaPT;
  font-size: 27px;
  line-height: 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: #1c1c1c;
`;

export const Navigation = styled.nav`
  width: 60%;
`;
