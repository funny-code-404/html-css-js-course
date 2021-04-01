import styled from "styled-components";
export const Header = styled.header`
  background-color: #ffffff;
`;

export const List = styled.ul`
  position: relative;
  list-style: none;
  @media (max-width: 1345px) {
    &.hideMenu {
      transform: translateX(-100%);
      transition: transform 0.2s ease-in-out;
    }
    &.showMenu {
      transform: none;
    }

    &.menu {
      padding-top: 20px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 30vw;
      min-height: 100vh;

      background-color: #fff;

      // box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0 8px 16px rgb(0 0 0 / 15%);
      z-index: 999999;

      li {
        margin: 0;
        width: 100%;
      }

      a {
        display: inline-block;
        padding: 10px 3vw;

        :hover {
          cursor: pointer;
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
  @media (max-width: 1480px) {
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

  @media (max-width: 1345px) {
    position: absolute;
    left: 10%;
    bottom: 29px;
  }
`;

export const NavigationButton = styled.button`
  display: none;
  cursor: pointer;

  position: absolute;

  font-size: 25px;
  color: #999999;
  z-index: 1;

  outline: none;

  background-color: transparent;
  border-color: transparent;

  @media (max-width: 1345px) {
    display: block;
  }

  :hover {
    color: #4285f4;
  }
`;

export const CrossButton = styled.button`
  cursor: pointer;

  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;

  font-size: 20px;
  color: #999999;

  background-color: transparent;
  border: transparent;
  outline: none;

  :hover {
    color: #4285f4;
  }
`;
