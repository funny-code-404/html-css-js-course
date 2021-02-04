import React from "react";
import {MainContainer, Wrapper} from "./styles";

export default function MainContainerComponent(props) {
    const {backgroundImg, contentConteiner, backgroundColorMainContainer, paddingTop, paddingBottom, paddingLeftRight} = props;
    return (
         <MainContainer backgroundColorMainContainer={backgroundColorMainContainer} backgroundImg={backgroundImg}>
            <Wrapper paddingLeftRight={paddingLeftRight} paddingTop={paddingTop} paddingBottom={paddingBottom}>
                {contentConteiner}
            </Wrapper>
        </MainContainer>
    )
}
