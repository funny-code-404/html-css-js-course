import BlockText from "../BlockText";
import './styles.css';

function Blog(props) {
    const {items} = props;
    return (
        <section>
            <BlockText items={items} styleTextContainer='positionCenterTitle'/>
            <div className='grid gridColumns'>
                {
                    items.list.map(item => {
                        return (
                            <div key = {item.title} className='gridItems' style={{backgroundImage:`url(${item.img})`}}>
                               <div className='imgTextContainer'>
                                   <h3 className='imgTitle'>{item.title}</h3>
                                   <span className='imgDate'>{item.date}</span>
                                </div> 
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Blog;