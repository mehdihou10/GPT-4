import './header.css';
import ai from '../../assets/ai.png'
import people from '../../assets/people.png';


const Header = ()=>{

    return(
        <div className="header section__padding" id='home'>
            <div className="container">
                <div className="text">
                    <h1 className="gradient__text">
                    Let’s Build Something amazing with GPT-4 OpenAI
                    </h1>

                    <p className='short-paragraph'>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                    </p>

                    <div className="email">
                        <input type="text" placeholder="Your Email Adress" />
                        <button>Get Started</button>
                    </div>

                    <div className="fideback">
                        <div className="profile-images">
                            <img src={people} alt="profils" />
                        </div>
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>

                <div className="image">
                    <img src={ai} alt="Open AI" />
                </div>
            </div>
        </div>
    )
}

export default Header;