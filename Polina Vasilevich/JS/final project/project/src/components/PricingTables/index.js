import React from "react";
import BlockText from "../BlockText";
import Button from "../Button";

class PricingTables extends React.Component {
  render() {
    const { items, buttonLabel } = this.props;
    const { header } = this.props;
    console.log(header);
    return (
      <section>
        {/* <BlockText items={header} isPositionCenter={true} />
        <div className="contentContainer">
          <div className="flexContainer">
            {items.list.map((item, index) => {
              return (
                <div key={index}>
                  {console.log(item.list)}
                  <BlockText items={item} isPositionCenter={true} />
                  {items.list.map((item) => {
                    return (
                      <>
                        <BlockText items={item.list} isNotVisible={true} />
                      </>
                    );
                  })}
                  <Button buttonLabel={buttonLabel} />
                </div>
              );
            })}
          </div>
        </div> */}
      </section>
    );
  }
}

export default PricingTables;
