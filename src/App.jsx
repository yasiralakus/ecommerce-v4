import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import logoImg from '/assets/images/logo.svg'
import cartImg from '/assets/images/cart.svg'
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

export default function App() {

    const location = useLocation();
    const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState('');
    const [openNotificationBox, setOpenNotificationBox] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpenNotificationBox(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [openNotificationBox]);

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location.pathname])

    return (
        <div className="full-page">

            <div style={openNotificationBox ? {right: '0'} : {}} className="notification-box">
                <p>{notification}</p>
            </div>

            <header className="header">

                <div className="container-1200">

                    <Link to={'/'} className="logo">
                        <img src={logoImg} alt="" />
                        <h5>StyleNest</h5>
                    </Link>

                    <ul className="nav">
                        <li><NavLink to={'/magaza'}>Mağaza</NavLink></li>
                    </ul>

                    <Link to={'/sepet'} className="cart-btn">
                        <img src={cartImg} alt="" />
                        <p>{cart.length}</p>
                    </Link>

                </div>

            </header>

            <div className="main">
                <div className="container">

                    <DataContext.Provider value={{cart, setCart, setNotification, setOpenNotificationBox}}>
                        <Outlet />
                    </DataContext.Provider>

                </div>
            </div>

        </div>
    )
}