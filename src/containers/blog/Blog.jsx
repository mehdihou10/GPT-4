import {blog1,blog2,blog3,blog4,blog5} from './blog.images';
import './blog.css';

const boxData = [
{image: blog1},
{image: blog2},
{image: blog3},
{image: blog4},
{image: blog5}

]

const Box = ({image})=>{

    return(
        <div className="gpt4__blog-box">
            <img src={image} alt="blog" />

            <div>
            <h5>Oct 1, 2023</h5>
            <p>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
            <a href="#">Read Article</a>
            </div>
            
        </div>
    )
}


const Blog = ()=>{



    return(
        <div className="gpt4__blog section__padding pb" id="blog">

            <h1 className='gradient__text'>A lot is happening,We are blogging about it.</h1>
            <div className="gpt4__blog-content">
            {
                boxData.map((box,index) => <Box key={index + 1} image={box.image} />)
            }
            </div>

        </div>
    )
}

export default Blog;