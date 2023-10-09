import React from 'react'
import Header from '../../components/header/header'
import classes from './PortfolioPage.module.scss'
import Footer from '../../components/footer/footer'
import Content from '../../components/content/content'
import openout from '../../assets/images/maximize-size-option.svg'

const PortfolioPage: React.FC = () => {
    return (
        <div className={classes['page-container']}>
            <img
                src={openout}
                className="w-6 h-6 absolute top-4 right-4 bg-white openCode cursor-pointer"
                title="Open source code"
                onClick={() => window.open('https://github.com/SENTHILnew/portfolio', '_blank')}
            ></img>
            <Header />
            <div className={classes['content-container']}>
                <Content />
            </div>
            <Footer />
        </div>
    )
}

export default PortfolioPage
