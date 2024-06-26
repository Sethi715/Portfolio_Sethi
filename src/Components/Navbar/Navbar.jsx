import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.svg'
import nav_underline from './../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("Home")

  return (
    <div className='navbar'>
        <img className='img-logo' src={logo} alt="logo" />
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("Home")}>Home</p></AnchorLink>{menu === "Home" ? <img src={nav_underline} alt="underline" /> : <></>}</li>

            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("About")}>About</p></AnchorLink>{menu === "About" ? <img src={nav_underline} alt="underline" /> : <></>}</li>

            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("Services")}>Services</p></AnchorLink>{menu === "Services" ? <img src={nav_underline} alt="underline" /> : <></>}</li>

            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("Portfolio")}>Portfolio</p></AnchorLink>{menu === "Portfolio" ? <img src={nav_underline} alt="underline" /> : <></>}</li>

            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu === "Contact" ? <img src={nav_underline} alt="underline" /> : <></>}</li>
        </ul>
        <div className="nav-connect" onClick={() => window.location.href = 'https://github.com/Sethi715'}>
  GitHub
</div>
    </div>
  )
}

export default Navbar