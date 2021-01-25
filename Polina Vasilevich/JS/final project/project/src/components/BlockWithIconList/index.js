import React from 'react';
import './styles.css';

class BlockWithIconList extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <section className='flexContainer'>
                {
                    items.map(item => {
                        return (
                            <div className='iconContainer'>
                                <i className={item.icon}></i>
                                <div>
                                    <h2 className='iconTitle'>{item.title}</h2>
                                    <p className='iconText'>{item.text}</p>
                                </div>

                            </div>
                        )
                    })
                }

                
            </section>
        )
    }
}

export default BlockWithIconList;