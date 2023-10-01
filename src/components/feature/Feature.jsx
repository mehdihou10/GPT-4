import './feature.css';

const Feature = (props)=>{

    return (
        <div className={`gpt__4-feature ${props.class === 'ver' ? 'feature-ver' : 'feature-hor'}`}>
            <div>
                
            <div className="feature-line"></div>
            <h3>{props.title}</h3>

            </div>

            <p>{props.text}</p>
        </div>
    )
}

export default Feature;