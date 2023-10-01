import './features.css';
import Feature from '../../components/feature/Feature';


const featuresData = [
{
    class: 'hor',
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
},
{
    class: 'hor',
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
},

{
    class: 'hor',
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
},

{
    class: 'hor',
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
}
]


const Features = ()=>{

    return(
        <div className="gpt4__features section__padding mb" id="features">
            <div className="text">
                <h1 className='gradient__text'>
                The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </h1>
                <h5>Request Early Access to Get Started</h5>
            </div>

            <div className="gpt4__features-content">
           {
            featuresData.map((feature,index) => <Feature key={index + 1} class={feature.class} title={feature.title} text={feature.text} />)
           }

            </div>
        </div>
    )
}

export default Features;