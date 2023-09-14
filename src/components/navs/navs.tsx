import React from 'react'

const Navs: React.FC<{ onClick?: () => void }> = (props) => {
    const onNavClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }

    return (
        <React.Fragment>
            <a href="#about" onClick={onNavClick}>
                About
            </a>
            <a href="#experience" onClick={onNavClick}>
                Experience
            </a>
            <a href="#projects" onClick={onNavClick}>
                Projects
            </a>
            <a href="#contact" onClick={onNavClick}>
                Contact
            </a>
        </React.Fragment>
    )
}

export default Navs
