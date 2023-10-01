import './whatGPT4.css';
import Feature from '../../components/feature/Feature';

const WhatGPT4 = ()=>{

    return(
        <div className="gpt4__whatgpt4 section__margin mb" id="wgpt">
            <div className="gpt4__whatgpt4-first">
                <Feature class='hor' title="What is GPT-4"
                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
                 />
            </div>

            <div className="gpt4__whatgpt4-second">
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <h5 className='gradient__text'>Explore The Library</h5>
            </div>

            <div className="gpt4__whatgpt4-third">
                <Feature class='ver' title='Chatbots'
                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
                 />

                <Feature class="ver" title='Knowledgebase'
                text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                 />

                <Feature class="ver" title='Education'
                text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
                 />

            </div>
        </div>
    )
}

export default WhatGPT4;