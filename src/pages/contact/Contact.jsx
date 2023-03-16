import React from 'react';
import ReactDOM  from 'react-dom';
import './contact.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';


function Contact() {
  return (
    <div>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio voluptates labore dolorem, reprehenderit tenetur id! Hic dolor odit quaerat?
    </Header>
    <section className='contact'>
      <div className='container contact__container'>
        <div className="contact__wrapper">
          <a href="mailto:justiceleaguefeb97@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="https://www.linkedin.com/in/utsav-sharma-b73042253/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin/></a>
          <a href="https://wa.me/+919571048559" target="_blank" rel="noreforrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Contact;