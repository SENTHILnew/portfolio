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

          <nav className={`flex ${classes.nabar}`}>
            <a href='#about'>About</a>
            <a href='#Experience'>Experience</a>
            <a href='#Projects'>Projects</a>
            <a href='#Contact'>Contact</a>
          </nav>

        </header>
    )
}

export default Header