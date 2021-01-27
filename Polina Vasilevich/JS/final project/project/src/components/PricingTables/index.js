import React from "react";
import BlockText from "../BlockText";
import Button from "../Button";

class PricingTables extends React.Component {
  render() {
    const { items, buttonLabel } = this.props;
    const { header } = this.props;
    
    return (
      <section>
        <BlockText items={header} styleTextContainer='positionCenterTitle' />
        <div className="contentContainer">
          <div className="flexContainer">
            {
              items.map(item => {
                return (
                  <div className='positionCenter'>
                    <BlockText key={item.title} items={item} styleTextContainer='positionCenterTitle'/>
                    <div>
                        {
                        item.list.map(({title, text}) => {
                            return (
                              <div key={title}>
                                <h3 className='smallFontSizeTitle' >{title}</h3>
                                <p className='smallFontSizeText'>{text}</p>
                              </div>
                            )
                        })
                        }
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default PricingTables;
