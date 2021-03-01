import styled from "styled-components";
export const Header = styled.header`
  background-color: #ffffff;
`;

export const List = styled.ul`
  list-style: none;
  @media (max-width: 1345px) {
    &.hideMenu {
      display: none;
    }
    &.showMenu {
      display: block;
    }

    &.menu {
      position: absolute;
      background-color: #f1f1f1;

      top: 11px;

      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 999999;

      li {
        margin: 0;
        width: 100%;
      }

      a {
        display: inline-block;
        padding: 10px 3vw;
        width: 10vw;
        :hover {
          cursor: pointer;

          background-color: #ccc;
        }
      }
    }
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  margin-right: 2vw;
  font-size: 13px;
`;

export const LogoContainer = styled.div`
  display: flex;
  @media (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoImg = styled.img`
  width: 64px;
  height: 30px;
`;

export const LogoText = styled.h2`
  font-family: FuturaPT;
  font-size: 27px;
  line-height: 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: #1c1c1c;
`;

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
`;

export const NavigationButton = styled.button`
  display: none;
  cursor: pointer;

  position: absolute;

  font-size: 25px;
  color: #999999;
  z-index: 1;

  transition: 0.6s ease;
  outline: none;

  background-color: transparent;
  border-color: transparent;

  @media (max-width: 1345px) {
    display: block;
  }
`;
