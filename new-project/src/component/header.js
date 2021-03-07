import React from 'react'
import Logo from '../img/mimo.png'
import { Link } from 'react-router-dom'





const HeaderContainer = () => {


    return(
        <header className="header-nav">
				<span>< img src={Logo}  className="logo" alt=""/> </span>
				<span className="home"><Link to='/'>Home</Link></span>
				<span className="add-note"><Link to='/addblog'>Add note</Link></span>
			</header>
    );
}


export default HeaderContainer;