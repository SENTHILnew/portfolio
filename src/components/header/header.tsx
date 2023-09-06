import classes from './header.module.scss';
import React, { useState } from 'react'

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setMenuOpen((iscurMenuOpen)=>!iscurMenuOpen);
    }
    return (
        <header className={classes.header}>
        <div className={`text-3xl flex justify-center w-1/4 ${classes.logo}`}>Senthilnathan</div>
        <div className={`${classes.navcontainer} flex-grow`}>
        <div className={`${classes.burgerMenu} ${isMenuOpen ? classes.open: classes.close}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
          </div>
        <nav className={`flex ${classes.nabar} ${isMenuOpen && classes.showNavBar}`}>
            <a href='#about'>About</a>
            <a href='#Experience'>Experience</a>
            <a href='#Projects'>Projects</a>
            <a href='#Contact'>Contact</a>
          </nav>
        </div>
         

        </header>
    )
}

export default Header