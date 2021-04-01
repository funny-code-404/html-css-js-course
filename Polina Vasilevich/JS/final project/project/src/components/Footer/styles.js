import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#242427"};
`;

export const FooterLogo = styled.div`
  text-align: center;
  align-self: center;
  justify-self: start;
`;

export const LogoTitle = styled.h2`
  font-family: FuturaPT;
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
`;

export const LogoText = styled.p`
  opacity: 0.5;
  font-family: CenturyGothic;
  font-size: 11px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.2em;
  color: #ffffff;
`;
export const FooterContacts = styled.div`
  align-self: center;
`;

export const ContactsTitle = styled.h3`
  font-family: OpenSans;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  color: #ffffff;
`;

export const ContactsText = styled.h3`
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #999999;
  white-space: pre-line;
`;

export const CopyRight = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#1a1a1d"};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

export const CopyRightText = styled.span`
  font-family: OpenSans;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #666666;
`;

export const Icon = styled.i`
  padding: 0 30px;
  font-family: themify;
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
  color: #999999;
`;
export const FooterColumn = styled.div``;

export const FooterColumnsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    ${FooterColumn}:nth-of-type(1) {
      grid-row: 1;
      grid-column: 2;
    }

    ${FooterColumn}:nth-of-type(n + 2) {
      grid-row: 2;
    }
  }

  @media (max-width: 956px) {
    grid-template-columns: repeat(2, 1fr);
    ${FooterColumn}:nth-of-type(1) {
      grid-row: 2;
      grid-column: 1;
    }

    ${FooterColumn}:nth-of-type(n + 2) {
      grid-column: 2;
    }

    ${FooterColumn}:nth-of-type(2) {
      grid-row: 1;
    }

    ${FooterColumn}:nth-of-type(3) {
      grid-row: 2;
    }

    ${FooterColumn}:nth-of-type(4) {
      grid-row: 3;
    }
  }
`;

export const CopyRightIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2vw;

  @media (max-width: 1440) {
  }
`;

export const FooterIconsButton = styled.button`
  display: none;
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 19%;
  font-size: 20px;
  color: #999999;
  z-index: 1;

  transition: 0.6s ease;
  outline: none;

  background-color: transparent;
  border-color: transparent;

  @media (max-width: 1370px) {
    display: block;
  }
`;

export const CopyRightIcon = styled.div`
  display: inline-block;
  margin-left: 5%;
  &:hover {
    opacity: 1;
  }
`;
