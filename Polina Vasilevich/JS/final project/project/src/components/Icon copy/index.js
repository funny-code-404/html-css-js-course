import React from "react";
import { IconContainer, Icon, ContentContainer } from "./styles";
import Typography from '../Typography';
import {GridContainer} from '../../mainStyles';
import Button from '../Button';

class IconComponent extends React.Component {
  render() {
    const {settings, items} = this.props;

    return (
      <GridContainer {...settings}>
        {
          items.map((item) => {
            return (
              <ContentContainer {...settings}>
                <IconContainer key={item.title} {...settings}>
                    <Icon {...settings} className={item.icon}></Icon>
                </IconContainer>
                {item.title && <Typography items={item} 
                settings={{
                  sizeTitle: 's',
                  ...settings
                }}/>}
                {
                  item.buttonLabel && <Button items={item}/>
                }
              </ContentContainer>
            )
          })
        }
        
      </GridContainer>

    );
  }
}

export default IconComponent;
