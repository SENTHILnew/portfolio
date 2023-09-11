import classes from './content.module.scss';
import React, { useState } from 'react';
import profile from '../../assets/images/emoji.png';
import profileGif from '../../assets/images/emoji.gif';
import cv from './Senthilnathan_Mani.pdf';
import linkedIn from '../../assets/images/linkedin.png';
import email from '../../assets/images/email.png';
import Navs from '../navs/navs';
import expImage from '../../assets/images/experience.png';

const PortfolioContent: React.FC = () => {
    const [over, setOver] = useState(false);
    return(
        <div className={classes.contentContainer}>
            <div id="about" className={classes.intro}>
                <div className={classes.infoText}>
                    <p className='text-xl text-gray-600 font-bold'>Hello, I`m</p>
                    <p className='text-5xl font-bold'>Senthilnathan</p>
                    <p className='text-3xl font-bold text-gray-600'>Front End Developer</p>
                    <div className={classes.contactContainer}>
                        <div className={`${classes.buttons} ${classes.cv} cursor-pointer`} ><a href={cv} download="Senthilnathan_Mani.pdf"> Download CV </a></div>
                        <div className={`${classes.buttons} ${classes.contact} cursor-pointer`}><a href='#contact'>Contact</a></div>
                    </div>
                </div>
                <div className='w-[30rem] h-[30rem] rounded-full overflow-hidden'><img src={over? profileGif : profile}  onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}></img></div>
            </div>
            <div id="know-more" className='flex gap-y-8 flex-wrap flex-col items-center justify-center w-full'>
                    <p className='text-gray-600 font-bold'>More</p>
                    <p className='text-5xl font-bold'>About Me</p>
                    <div className='p-8 flex items-center justify-center gap-x-8 flex-wrap gap-y-4 w-full'>
                       <div className='p-8 flex items-center justify-center border-2 border-gray-400 rounded-2xl w-1/2 flex-col gap-y-2 h-[10rem] w-[25rem]'>
                        <img src={expImage} className='h-[3rem]'></img>
                        <p className='font-bold text-xl'>Experience</p>
                        <p className='text-center text-gray-600'>5+ years<br/>Frontend Development</p>
                       </div>
                       <div className='p-8 flex items-center justify-center border-2 border-gray-400 rounded-2xl w-1/2 flex-col gap-y-2 h-[10rem] w-[25rem]'>
                       <img src={expImage} className='h-[3rem]'></img>
                        <p className='font-bold text-xl'>Education</p>
                        <p className='text-center text-gray-600'>Bachelors Degree</p>
                       </div>
                    </div>
                    <p>
                    Front End Developer with 5+ years of experience in Front End development Angular, React, JavaScript, TypeScript, NodeJS with express
                    </p>
            </div>
            <div className={classes.experience}>

            </div>
            <div id="contact" className={classes.contact}>
                    <p className='text-gray-600 font-bold'>Get in Touch</p>
                    <p className='text-5xl font-bold'>Contact Me</p>
                    <div className={classes.linksContainer}>
                        <p className='flex items-center gap-x-2 flex-wrap'><img src={email} alt='Email' className='w-[2.5rem]'></img><a href='mailto:senthilnathan722@gmail.com' target="_blank" rel="noreferrer">senthilnathan722@gmail.com</a></p>
                        <p className='flex items-center gap-x-2 flex-wrap'><img src={linkedIn} alt='Linked In' className='h-[2.2rem]'></img><a href='https://www.linkedin.com/in/senthilnathan-mani-b7068685/' target="_blank" rel="noreferrer">Linked In</a></p>
                    </div>
            </div>
            <nav className='flex gap-x-8 text-xl'>
            <Navs></Navs>
            </nav>
        </div>
    )
}

export default PortfolioContent