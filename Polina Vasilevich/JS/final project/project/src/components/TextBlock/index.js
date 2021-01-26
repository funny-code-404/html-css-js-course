import React from 'react';
import './styles.css';

class TextBlock extends React.Component{
    render() {
        const {items} = this.props;
        return (
            <div>
            {
                items.map(item => {
                    return (
                        <div className='textCenter'>
                            <h2 className="sectionSmallTitle">{item.title}</h2>
                            <p className="sectionSmallText">{item.text}</p>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default TextBlock;