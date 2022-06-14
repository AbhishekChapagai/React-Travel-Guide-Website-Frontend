import React from 'react'
import Logo from '../../assets/Images/travelLogo.png'

const Header = () => {
    return (
        <>
            <div className='main-container'>
                <div className='menu_container'>
                    <div className='menu_links'>
                        <ul className='links_ul'>
                            <li>Home</li>
                            <li>Destination</li>
                            <li>Hire Guide</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='logo'>
                        <img src={Logo}/>
                    </div>
                    <div className='btn_login_signup'>
<p>Hello signup</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header