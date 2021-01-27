import React from "react";

import {Title, Text, Icon} from './styles';
import './styles.css';

class IconComponent extends React.Component {
  render() {
    const { icon, img, title, text } = this.props.items;
    const { styleImg, styleImgContainer } = this.props;
    return (
      <div className={styleImgContainer}>
        
          {img ? (
            <img className={styleImg} src={img} alt={title} />
          ) : (
            
              <Icon className={`${icon} ${styleImg}`} ></Icon>
          
          )}
       

        <div className="textContainer">
          <Title>{title}</Title>
          <Text>{text}</Text>
        </div>
      </div>
    );
  }
}

export default IconComponent ;
