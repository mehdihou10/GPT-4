import './footer.css';


const List = ({list})=>{

    const newList = JSON.parse(list);

    return(
        <ul>
            {
                newList.map((element,index)=> <li key={index + 1}><a href='#'>{element}</a></li>)
            }
        </ul>
    )
}

const Footer = ()=>{

    return(
        <footer className="section__padding">
            <h1 className='footer-title gradient__text'>Do you want to step in to the future before others</h1>
            <a className='request' href="#">Request Early Access</a>

           <div className="footer-content">
            <div className="footer-info">
                <h1>GPT-4</h1>
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>

            <List list='["links", "Overons", "Counters", "Contact"]' />
            <List list='["Company", "Terms & Conditions", "Privacy Policy", "Contact"]' />
            <List list='["Get in touch", "Crechterwoord K12 182 DK Alknjkcb", "085-132567", "info@payme.net"]' />

           </div>

           <p className='copyright'>&copy; 2023 GPT-4. All rights reserved.</p>
        </footer>
    )
}

export default Footer;