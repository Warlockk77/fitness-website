import React from 'react';
import {Link} from 'react-router-dom';
import {FaLinkedin} from 'react-icons/fa';
import { AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai'
import Logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container footer__container">
            <article>
               <Link to='/' className='logo'>
<img src={Logo} alt="footerlogo" />
               </Link>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sint dolor in officiis nesciunt cum, numquam sed voluptas autem quod consectetur saepe, rerum ipsa, vitae molestiae impedit dolore at hic!</p>
               <div className="footer__socials">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer nooper"><FaLinkedin /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer nooper"><AiFillInstagram/></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer nooper"><AiOutlineTwitter/></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer nooper"><AiFillFacebook/></a>
               </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
           
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
                </article>

        </div>
        <div className="footer__copyright">
            <small>All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer;