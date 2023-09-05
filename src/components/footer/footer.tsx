import classes from './footer.module.scss';
import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className={classes.footer}>
                Copyright © {currentYear} Senthilnathan. All Rights Reserved
        </footer>
    )
}

export default Footer