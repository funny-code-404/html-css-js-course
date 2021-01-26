import React from 'react';
import BlockText from '../BlockText';
import TextBlock from '../TextBlock';
import Button from '../Button';

class PricingTables extends React.Component {
    render() {
        const {items,buttonLabel} = this.props;
        return (
            <section>
                <BlockText items={items}/>
                <div className='contentContainer'>
                    <div className='flex textCenter'>
                    {
                        items.list.map(item => {
                            return (
                                <div>
                                    <BlockText items={item}/>
                                    <BlockText items={item.list} isNotVisible={true}/>
                                    <Button buttonLabel = {buttonLabel}/>
                                </div>
                            )
                        })
                    }
                    </div>

                </div>
            </section>
            
        )
    }
}

export default PricingTables;