import './navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import {useState} from 'react';


const Menu = ()=>{
  
    return(
        <ul>
    
        <li><a href="#home">Home</a></li>
        <li><a href="#wgpt">What is GPT?</a></li>
        <li><a href="#possibility">Open AI</a></li>
        <li><a href="#features">Case Studies</a></li>
        <li><a href="#blog">Library</a></li>
    
        </ul>
    )
}

const Sign = ()=>{
    return(
        <>
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>
        </>
    )
}

const Navbar = ()=>{

    const [toggleMenu,setToggleMenu] = useState(false);

    return (
        <nav>
            <div className="container">
         <a className='logo' href="#">GPT-4</a>

         <div className='gpt__navbar-menu'>
         <Menu />

         </div>


            <div className="btns links">
                <Sign />

            </div>

           <div className="change-state">
           {
                toggleMenu === true ?

                <RiCloseLine className='bars' onClick={()=> setToggleMenu(false)} />

                : 
                <RiMenu3Line className='close-btn' onClick={()=> setToggleMenu(true)} />

            }

           </div>

           {toggleMenu && <div className="gpt__navbar-menu-container-device scale-up-center">

           <Menu />

           <div className="gpt__btns links">
                <Sign />

            </div>

           </div>}

            </div>

   
        </nav>
    )
}

export default Navbar;