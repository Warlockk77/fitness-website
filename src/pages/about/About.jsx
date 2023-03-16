import React from 'react';
import './about.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';


const About = () => {
  return (
    <>
    <Header title="About us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, architecto! Rerum aliquam nemo nisi esse. Et dolores asperiores placeat, dicta possimus nulla veritatis, assumenda fugiat reprehenderit quas corporis explicabo est!
    </Header>

    <section className='about__story'>
      <div className='container about__story-container'>
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cupiditate alias fugit voluptatibus reprehenderit eligendi voluptates sunt aut minima consequuntur maxime quibusdam minus perspiciatis illo eaque accusantium odio. Vel, iste.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere aliquam dignissimos nihil unde delectus, deserunt placeat inventore error expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam accusantium provident, perferendis quidem eveniet porro quasi quaerat aliquid id placeat.</p>

        
        </div>
      </div>
    </section>


    <section className='about__vision'>
      <div className='container about__vision-container'>
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cupiditate alias fugit voluptatibus reprehenderit eligendi voluptates sunt aut minima consequuntur maxime quibusdam minus perspiciatis illo eaque accusantium odio. Vel, iste.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere aliquam dignissimos nihil unde delectus, deserunt placeat inventore error expedita?</p>
        
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>


    <section className='about__mission'>
      <div className='container about__mission-container'>
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, cupiditate alias fugit voluptatibus reprehenderit eligendi voluptates sunt aut minima consequuntur maxime quibusdam minus perspiciatis illo eaque accusantium odio. Vel, iste.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere aliquam dignissimos nihil unde delectus, deserunt placeat inventore error expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam accusantium provident, perferendis quidem eveniet porro quasi quaerat aliquid id placeat.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About; 