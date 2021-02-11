import React from "react";
import { IconContainer, Icon } from "./styles";
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
              <div>
                <IconContainer key={item.title} {...settings}>
                    <Icon {...settings} className={item.icon}></Icon>
                </IconContainer>
                {item.title && <Typography items={item} 
                settings={{
                  sizeTitle: 's',
                }}/>}
                {
                  item.buttonLabel && <Button items={item}/>
                }
              </div>
            )
          })
        }
        
      </GridContainer>

    );
  }
}

export default IconComponent;
