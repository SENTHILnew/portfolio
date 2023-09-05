import React from 'react'
import Header from '../../components/header/header';
import classes from './PortfolioPage.module.scss';
import Footer from '../../components/footer/footer';

const PortfolioPage: React.FC = () => {
    return (
       <div className={classes['page-container']}>
        <Header/>
        <div className={classes['content-container']}>
            
        </div>
        <Footer/>
       </div>
    )
}

export default PortfolioPage
