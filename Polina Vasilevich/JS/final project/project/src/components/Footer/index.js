import React from "react";
import MainContainer from "../MainContainer";
import { GridContainer, FlexContainer } from "../../mainStyles";
import IconsList from "../IconsList";
import Typography from "../Typography";

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
    const { logo, contacts, copyRight } = this.props.items;

    const firstContentContainer = (
      <GridContainer>
        {/* <IconsList items={logo} /> */}
        {contacts.map((item) => {
          return (
            <Typography
              items={item}
              settings={{
                sizeTitle: "s",
                colorTitle: "white",
                colorText: "grey",
                positionText: "left",
              }}
            />
          );
        })}
      </GridContainer>
    );

    const secondContentContainer = (
      <FlexContainer style={{ height: "38px" }}>
        <Typography items={copyRight} />
      </FlexContainer>
    );
    return (
      <footer>
        <MainContainer
          contentContainer={firstContentContainer}
          settings={{
            backgroundColorMainContainer: "dark",
            heightMainContainer: "100%",
          }}
        />

        <MainContainer
          contentContainer={secondContentContainer}
          settings={{
            backgroundColorMainContainer: "copyRight",
            heightMainContainer: "90px",
            isVerticalCenter: "true",
            paddingBottom: "0",
            paddingTop: "0",
          }}
        />
      </footer>
    );

    // return (
    //   <Footer>
    //     <Wrapper>
    //       <GridContainer numberColumns="4" style={{ height: "385px" }}>
    //         <FooterLogo>
    //           <img src={imgLogo} alt={imgLogo}></img>
    //           <LogoTitle>{titleLogo}</LogoTitle>
    //           <LogoText>{textLogo}</LogoText>
    //         </FooterLogo>

    //         {contacts.map(({ titleContacts, textContacts }) => {
    //           return (
    //             <FooterContacts key={titleContacts}>
    //               <ContactsTitle>{titleContacts}</ContactsTitle>
    //               <ContactsText>{textContacts}</ContactsText>
    //             </FooterContacts>
    //           );
    //         })}
    //       </GridContainer>
    //     </Wrapper>

    //     <CopyRight>
    //       <Wrapper>
    //         <ContentContainer>
    //           <CopyRightText>{copyRight.text}</CopyRightText>
    //           <div>
    //             {copyRight.icons.map((icon, index) => {
    //               return <Icon key={index} className={`${icon}`}></Icon>;
    //             })}
    //           </div>
    //         </ContentContainer>
    //       </Wrapper>
    //     </CopyRight>
    //   </Footer>
    // );
  }
}

export default FooterComponent;
