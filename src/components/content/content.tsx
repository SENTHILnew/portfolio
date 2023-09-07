import classes from './content.module.scss';
import React from 'react';
import profile from '../../assets/images/emoji.png';
import cv from './Senthilnathan_Mani.pdf';

const PortfolioContent: React.FC = () => {

    return(
        <div>
            <div className={classes.intro}>
                <div className={classes.infoText}>
                    <p className='text-xl text-gray-600 font-bold'>Hello, I`m</p>
                    <p className='text-5xl font-bold'>Senthilnathan</p>
                    <p className='text-3xl font-bold text-gray-600'>Front End Developer</p>
                    <div className={classes.contactContainer}>
                        <div className={`${classes.buttons} ${classes.cv}`} ><a href={cv} download="Senthilnathan_Mani.pdf"> Download CV </a></div>
                        <div className={`${classes.buttons} ${classes.contact}`}>Contact</div>
                    </div>
                </div>
                <div className='w-[30rem] h-[30rem] rounded-full overflow-hidden'><img src={profile} ></img></div>
                
            </div>
        </div>
    )
}

export default PortfolioContent