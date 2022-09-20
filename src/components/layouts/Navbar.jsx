import {useEffect, useRef, useState} from 'react';
import logo from '../../assets/logo.svg';
import {FiShoppingCart, FiLock,} from 'react-icons/fi';
import {BiChevronUp, BiChevronDown} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import hostingIcon from '../../assets/hosting.svg';
import cloudIcon from '../../assets/cloud.svg';
import worldpressIcon from '../../assets/wordpress.svg';
import vpsHostingIcon from '../../assets/vpshosting.svg';
import cyberPanelHostingIcon from '../../assets/cyberpanelhosting.svg';
import minecrafthostingIcom from '../../assets/minecrafthosting.svg';
import googleIcon from '../../assets/google.svg';
import aIcon from '../../assets/@.svg';
import domainIcon from '../../assets/domain.svg';
import whoislookupIcon from '../../assets/whoislookup.svg';
import domaintransferIcon from '../../assets/domaintransfer.svg';
import { motion, AnimatePresence } from 'framer-motion';


import '../../styles/navbar.scss';
import Languages from './Languages';

const Navbar = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [navOpen1, setNacOpen1] = useState(false);
  const [navOpen2, setNacOpen2] = useState(false);
  const [navOpen3, setNacOpen3] = useState(false);
  const [navOpen4, setNacOpen4] = useState(false);
  const [countryName, setCountryName] = useState('English');
  const headerRef = useRef(null);


  const openHandler = (open, setOpen) => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen(!open);
  }
  
  const closeOutsideClick = (e) => {
    const subLinks = document.querySelectorAll('.sub_link');
    subLinks.forEach((subLink) => {
        if(!subLink.contains(e.target)){
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
            setOpen4(false);
        }
    });
  }

  const onScrollSticky = () => {
    if(window.scrollY > 5){
        headerRef.current.classList.add('scroll');
    }else{
        headerRef.current.classList.remove('scroll');
    }
  }

  const navbarHandler = () => {
    headerRef.current.classList.toggle('nav_active');
    if(!headerRef.current.classList.contains('scroll')){
        headerRef.current.classList.add('scroll');
    }else{
        headerRef.current.classList.remove('scroll');
    }
  }

  const languageBoxHandler = () => {
    headerRef.current.classList.toggle('language_box_active');
    headerRef.current.classList.remove('nav_active');
    if(!headerRef.current.classList.contains('scroll')){
        headerRef.current.classList.add('scroll');
    }else{
        headerRef.current.classList.remove('scroll');
    }
  }
  
  useEffect(() => {
    document.body.addEventListener('mousedown',closeOutsideClick);

    return () => {
        document.body.removeEventListener('mousedown',closeOutsideClick);
    }
  },[]);

  useEffect(() => {
    window.addEventListener('scroll',onScrollSticky);
    return () => {
        window.removeEventListener('scroll',onScrollSticky); 
    }
  },[]);

  useEffect(() => {
    const matchMedia = window.matchMedia('(max-width: 990px)');
    if(matchMedia.matches) setCountryName('IN');

    const updateMedia = (e) => {
        e.matches ? setCountryName('IN') : setCountryName('English');
    }

    matchMedia.addEventListener('change',updateMedia);

    return () => {
        matchMedia.removeEventListener('change',updateMedia);
    }
  },[]);

  const animateUL = {
    hidden: {
        height: 0,
        transition: {
            duretion: .2,
            when: 'afterChildren'
        }
    },
    show: {
        height: 'auto',
        transition: {
            duretion: .2,
            when: 'beforeChildren'
        }
    }
  }

  const animateLI = {
    hidden: {
        x: '-110%',
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1
    }
  }
  return (
    <header ref={headerRef}>
        {/* lift side */}
        <div>
            <motion.div initial={{x: '-100%', opacity: 0}} whileInView={{x: 0, opacity: 1}}>
                <img src={logo} alt='Logo image'/>
            </motion.div>
            <div className='languages' onClick={languageBoxHandler}>
                <span className="fi fi-in"></span>
                <span>{countryName}</span>
            </div>
        </div>
        {/* right side  */}
        <div>
            <nav className='xl_nav'>
                <ul>
                    <li>
                        <p onClick={() => openHandler(open1, setOpen1)}>Hosting <span>{open1 ? <BiChevronUp/> : <BiChevronDown/>}</span></p>
                        {open1 &&
                            <ul className='hosting sub_link' id='hosting' onMouseOver={() => setOpen1(true)}>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={hostingIcon} alt='hosting icon'/>
                                        </div>
                                        <div>
                                            <h2>Web Hosting</h2>
                                            <p>For small to medium websites.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={cloudIcon} alt='cloud icon'/>
                                        </div>
                                        <div>
                                            <h2>Cloud Hosting</h2>
                                            <p>For large scale projects.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={worldpressIcon} alt='wordpress icon'/>
                                        </div>
                                        <div>
                                            <h2>WordPress Hosting</h2>
                                            <p>Optimized solutions for WordPress hosting.</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li>
                        <p onClick={() => openHandler(open2, setOpen2)}>VPS <span>{open2 ? <BiChevronUp/> : <BiChevronDown/>}</span></p>
                        {open2 &&
                            <ul className='vps sub_link'>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={vpsHostingIcon} alt='vps hosting icon'/>
                                        </div>
                                        <div>
                                            <h2>VPS Hosting</h2>
                                            <p>Dedicated resources to scale.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={cyberPanelHostingIcon} alt='cyber hosting'/>
                                        </div>
                                        <div>
                                            <h2>CyberPanel Hosting</h2>
                                            <p>Control panel with Open/LiteSpeed Webserver.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={minecrafthostingIcom} alt='minecraft hosting icon'/>
                                        </div>
                                        <div>
                                            <h2>Minecraft Server Hosting</h2>
                                            <p>Share your Minecraft experience.</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li>
                        <p onClick={() => openHandler(open3, setOpen3)}>Email <span>{open3 ? <BiChevronUp/> : <BiChevronDown/>}</span></p>
                        {open3 &&
                            <ul className='email sub_link'>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={aIcon} alt='google icon'/>
                                        </div>
                                        <div>
                                            <h2>Google Workspace Email Hosting</h2>
                                            <p>Get custom email and 30GB of storage.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={googleIcon} alt='@ icon'/>
                                        </div>
                                        <div>
                                            <h2>Hostinger Email Hosting</h2>
                                            <p>Promote your business with every outreach.</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li>
                        <p onClick={() => openHandler(open4, setOpen4)}>Domain <span>{open4 ? <BiChevronUp/> : <BiChevronDown/>}</span></p>
                        {open4 &&
                            <ul className='domain sub_link'>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={domainIcon} alt='domain icon'/>
                                        </div>
                                        <div>
                                            <h2>Domain Name Search</h2>
                                            <p>Find the perfect domain name.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={whoislookupIcon} alt='whois lookup icon'/>
                                        </div>
                                        <div>
                                            <h2>WHOIS Lookup</h2>
                                            <p>Lookup tool to find WHOIS information.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div>
                                            <img src={domaintransferIcon} alt='domain transfer icon'/>
                                        </div>
                                        <div>
                                            <h2>Domain Transfer</h2>
                                            <p>Want to transfer domain to Hostinger?</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li><Link to='/login' className='btn'><span><FiLock/></span>Log In</Link></li>
                </ul>
            </nav>

            <Link to='/cart' className='cart'><span><FiShoppingCart/></span><p>Cart</p></Link>

            <div className='humburger' onClick={navbarHandler}>
                <div className='line line1'></div>
                <div className='line line2'></div>
                <div className='line line3'></div>
            </div>
        </div>
        <div className='navbar'>
            {/* <nav> */}
                <ul>
                    <li>
                    <div onClick={() => setNacOpen1(!navOpen1)}>
                        <span>Hosting</span><motion.span animate={navOpen1 ? {rotate: -90} : {rotate: 0,transition: {delay: .6}}}><BiChevronDown/></motion.span>
                    </div>
                    <AnimatePresence>
                        {navOpen1 &&
                            <motion.ul variants={animateUL} initial='hidden' animate='show' exit='hidden'>
                                <motion.li variants={animateLI} transition={{delay: .2}}><Link to='/'>Web Hosting</Link></motion.li>
                                <motion.li variants={animateLI} transition={{delay: .4}}><Link to='/'>Cloud Hosting</Link></motion.li>
                                <motion.li variants={animateLI} transition={{delay: .6}}><Link to='/'>WordPress Hosting</Link></motion.li>
                            </motion.ul>
                        }
                    </AnimatePresence>
                    </li>
                    <li>
                    <div onClick={() => setNacOpen2(!navOpen2)}>
                        <span>VPS</span><motion.span animate={navOpen2 ? {rotate: -90} : {rotate: 0,transition: {delay: .6}}}><BiChevronDown/></motion.span>
                    </div>
                    <AnimatePresence>
                        {navOpen2 &&
                            <motion.ul variants={animateUL} initial='hidden' animate='show' exit='hidden'>
                                <motion.li variants={animateLI} transition={{delay: .2}}><Link to='/'>VPS Hosting</Link></motion.li>
                                <motion.li variants={animateLI} transition={{delay: .4}}><Link to='/'>CyberPanel Hosting</Link></motion.li>
                                <motion.li variants={animateLI} transition={{delay: .6}}><Link to='/'>Minecraft Server Hosting</Link></motion.li>
                            </motion.ul>
                        }
                    </AnimatePresence>
                    </li>
                    <li>
                    <div onClick={() => setNacOpen3(!navOpen3)}>
                        <span>Email</span><motion.span animate={navOpen3 ? {rotate: -90} : {rotate: 0,transition: {delay: .6}}}><BiChevronDown/></motion.span>
                    </div>
                    <AnimatePresence>
                        {navOpen3 &&
                            <motion.ul variants={animateUL} initial='hidden' animate='show' exit='hidden'>
                                <motion.li variants={animateLI} transition={{delay: .2}}><Link to='/'>Google Workspace Email Hosting</Link></motion.li>
                                <motion.li variants={animateLI} transition={{delay: .4}}><Link to='/'>Hostinger Email Hosting</Link></motion.li>
                            </motion.ul>
                        }
                    </AnimatePresence>
                    </li>
                    <li>
                    <div onClick={() => setNacOpen4(!navOpen4)}>
                        <span>Domain</span><motion.span animate={navOpen4 ? {rotate: -90} : {rotate: 0,transition: {delay: .6}}}><BiChevronDown/></motion.span>
                    </div>
                    <AnimatePresence>
                        {navOpen4 &&
                            <motion.ul variants={animateUL} initial='hidden' animate='show' exit='hidden'>
                                <motion.li variants={animateLI} transition={{delay: .2}}><Link to='/'>Domain Search</Link></motion.li>
                                <motion.li variants={animateLI} transition={{delay: .4}}><Link to='/'>whois Lookup</Link></motion.li>
                                <motion.li variants={animateLI} transition={{delay: .6}}><Link to='/'>Domain Transfer</Link></motion.li>
                            </motion.ul>
                        }
                    </AnimatePresence>
                    </li>
                </ul>
            {/* </nav> */}
            <Link to='/login' className='btn'><span><FiLock/></span>Log In</Link>
        </div>
        <Languages headerRef={headerRef}/>
    </header>
  )
}

export default Navbar