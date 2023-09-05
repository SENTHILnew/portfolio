import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants';
import notFound from '../assets/images/notfound.jpg';
import styles from './notFoundPage.module.scss'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    const redirectToHomePage = () => {
        navigate(ROUTES.HOMEPAGE_ROUTE)
    }

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={notFound} alt='notFound' className={`${styles.notFoundImage} m-auto` }></img>
            <span style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>
                Homepage
            </span>
        </div>
    )
}

export default NotFoundPage
