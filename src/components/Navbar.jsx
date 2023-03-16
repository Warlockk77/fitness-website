import {Link , NavLink} from 'react-router-dom'
import {useState} from 'react';
import Logo from '../images/logo.png';
import {links} from '../data';
import {GoThreeBars} from 'react-icons/go';
import {AiFillCloseCircle} from 'react-icons/ai';
import './navbar.css' ;


const Navbar = () => {

   const [isNavShowing, setIsNavShowing] = useState(false);
    
 

    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='logo' onClick={()=> setIsNavShowing(false)} >
                    <img src={Logo} alt='Nav Logo' />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show_nav': 'hide_nav'}`}>
                 {links.map(({name, path}, index) => {
                    return (
                    <li key={index}> 
                        <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""} 
                        onClick={()=>setIsNavShowing(prev => !prev)} >{name}</NavLink>
                    </li>
                    )
                 })
                 }
                </ul>
                <button onClick={()=>setIsNavShowing(prev => !prev)} className="nav__toggle-btn">
                   {
                    isNavShowing?< AiFillCloseCircle /> : < GoThreeBars />
                   }
                </button>
            </div>
        </nav>
    )
}

export default Navbar ; 
