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

export const FooterColumnsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 956px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// &:nth-of-type(n + 2) {
//   grid-row: 2;
// }
// &:nth-of-type(1) {
//   grid-column: 2/8;
// }

// &:nth-of-type(2) {
//   grid-column: 1/4;
// }

// &:nth-of-type(3) {
//   grid-column: 4/7;
// }

// &:nth-of-type(4) {
//   grid-column: 7/10;
// }

// @media (max-width: 847px) {
// &:nth-of-type(2) {
//   display: none;
// }

// &:nth-of-type(3) {
//   grid-column: 2/6;
// }

// &:nth-of-type(4) {
//   grid-column: 6/10;
// }

export const FooterColumn = styled.div`
  @media (max-width: 1443px) {
    &:nth-of-type(2) {
      display: none;
    }

    @media (max-width: 956px) {
      &:nth-of-type(3) {
        display: none;
      }
  }
`;

export const CopyRightIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2vw;

  @media (max-width: 1440px) {
  }
`;

export const CopyRightIcon = styled.div`
  @media (max-width: 1369px) {
  }
`;
