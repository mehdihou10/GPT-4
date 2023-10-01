import './brand.css';
import {google,slack,atlassian,dropbox,shopify} from './imports';

const Brand = ()=>{

    return (
        <div className='brand section__padding'>
            <img src={google} alt="brand" />
            <img src={slack} alt="brand" />
            <img src={atlassian} alt="brand" />
            <img src={dropbox} alt="brand" />
            <img src={shopify} alt="brand" />

        </div>
    )
}

export default Brand;