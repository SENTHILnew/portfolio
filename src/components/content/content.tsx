import classes from './content.module.scss';
import React from 'react';
import profile from '../../assets/images/emoji.png';
import cv from './Senthilnathan_Mani.pdf';
import linkedIn from '../../assets/images/linkedin.png';
import email from '../../assets/images/email.png';

const PortfolioContent: React.FC = () => {

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
                <div className='w-[30rem] h-[30rem] rounded-full overflow-hidden'><img src={profile} ></img></div>
            </div>
            <div id="contact" className={classes.contact}>
                    <p className='text-gray-600 font-bold'>Get in Touch</p>
                    <p className='text-5xl font-bold'>Contact Me</p>
                    <div className={classes.linksContainer}>
                        <p className='flex items-center gap-x-2 flex-wrap'><img src={email} alt='Email' className='w-[2.5rem]'></img><a href='mailto:senthilnathan722@gmail.com' target="_blank" rel="noreferrer">senthilnathan722@gmail.com</a></p>
                        <p className='flex items-center gap-x-2 flex-wrap'><img src={linkedIn} alt='Linked In' className='h-[2.2rem]'></img><a href='https://www.linkedin.com/in/senthilnathan-mani-b7068685/' target="_blank" rel="noreferrer">Linked In</a></p>
                    </div>
            </div>
        </div>
    )
}

export default PortfolioContent