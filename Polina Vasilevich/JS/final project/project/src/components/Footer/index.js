import React from "react";
import { GridContainer, Wrapper } from "../../styles";
import {
  Footer,
  FooterLogo,
  FooterContacts,
  LogoTitle,
  LogoText,
  ContactsTitle,
  ContactsText,
  CopyRight,
  ContentContainer,
  CopyRightText,
  Icon,
} from "./styles";

class FooterComponent extends React.Component {
  render() {
    const { imgLogo, titleLogo, textLogo } = this.props.logo;
    const { contacts, copyRight } = this.props;

    return (
      <Footer>
        <Wrapper>
          <GridContainer numberColumns="4" style={{ height: "385px" }}>
            <FooterLogo>
              <img src={imgLogo} alt={imgLogo}></img>
              <LogoTitle>{titleLogo}</LogoTitle>
              <LogoText>{textLogo}</LogoText>
            </FooterLogo>

            {contacts.map(({ titleContacts, textContacts }) => {
              return (
                <FooterContacts key={titleContacts}>
                  <ContactsTitle>{titleContacts}</ContactsTitle>
                  <ContactsText>{textContacts}</ContactsText>
                </FooterContacts>
              );
            })}
          </GridContainer>
        </Wrapper>

        <CopyRight>
          <Wrapper>
            <ContentContainer>
              <CopyRightText>{copyRight.text}</CopyRightText>
              <div>
                {copyRight.icons.map((icon, index) => {
                  return <Icon key={index} className={`${icon}`}></Icon>;
                })}
              </div>
            </ContentContainer>
          </Wrapper>
        </CopyRight>
      </Footer>
    );
  }
}

export default FooterComponent;
