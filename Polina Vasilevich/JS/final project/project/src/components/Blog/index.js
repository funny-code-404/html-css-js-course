import Title from "../Title";
import './styles.css';

function Blog(props) {
    const {items} = props;
    return (
        <section>
            <Title items={items} position='center'/>

        </section>
    )
}

export default Blog;


{/* <div className='paddingRightLeftgrid gridColumns'>
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
</div> */}