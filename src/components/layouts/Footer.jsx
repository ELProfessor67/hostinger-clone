import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import {FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';
import {motion} from 'framer-motion';

import '../../styles/footersection.scss';

const Footer = () => {
  const animate = {
    initial: {x: '-100%', opacity: 0},
    animate: {x: 0, opacity: 1}
  }
  return (
    <div className='footer'>
        <footer>
            <motion.div variants={animate} initial='initial' whileInView='animate' transition={{delay: .2}} className='content'>
                <img src={logo} alt='logo'/>
                <p>We are a web hosting company with a mission to help everyone who goes online succeed.</p>
                <p>We accomplish this by continuously developing server technology, giving expert assistance, and ensuring a flawless online website hosting experience.</p>
                <div className='payment_logo'>
                    <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/visa-5d68dadf24.png' alt='logo'/>
                    <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png' alt='logo'/>
                    <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/discover-1e5edf3f39.png' alt='logo'/>
                    <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/dinersclub-3f02e2deec.png' alt='logo'/>
                    <img src='https://assets.hostinger.com/images/payments/homepage-2020-payments/rupay-2bad18f6df.png' alt='logo'/>
                </div>
                <a href='#'>And More</a>
            </motion.div>
            <motion.div className='hosting' variants={animate} initial='initial' whileInView='animate' transition={{delay: .4}}>
                <h3>HOSTING</h3>
                <ul>
                    <li><span><FaArrowRight/></span><Link to='/'><Link to='/'>Web Hosting</Link></Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>VPS Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Minecraft Server Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>CyberPanel Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Cloud Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Wordpress Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Email Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>CMS Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Ecommerce Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Free Web Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Online Store</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Website Builder</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Buy Hosting</Link></li>
                </ul>
            </motion.div>
            <motion.div className='domain' variants={animate} initial='initial' whileInView='animate' transition={{delay: .6}}>
                <h3>Domain</h3>
                <ul>
                    <li><span><FaArrowRight/></span><Link to='/'>Domain Name Search</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Domain Transfer</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Free Domain Name</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>XYZ Domain</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Cheap Domains</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Domain Extentions</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>WHOIS Lookup</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Free SSL Certificate</Link></li>
                </ul>
            </motion.div>
            <motion.div className='information' variants={animate} initial='initial' whileInView='animate' transition={{delay: .8}}>
                <h3>Information</h3>
                <ul>
                    <li><span><FaArrowRight/></span><Link to='/'>Migrate To Hosting</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>System Status</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Affiliate Program</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Payment Method</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Rewards</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Reviews</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Pricing</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Sitemap</Link></li>
                </ul>
                <h4>Legal</h4>
                <ul>
                    <li><span><FaArrowRight/></span><Link to='/'>Privacy Policy</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Terms Of service</Link></li>
                </ul>
            </motion.div>
            <motion.div className='company' variants={animate} initial='initial' whileInView='animate' transition={{delay: 1}}>
            <h3>company</h3>
                <ul>
                    <li><span><FaArrowRight/></span><Link to='/'>About hostinger</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>our technology</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>roadmap</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>custom care</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>blog</Link></li>
                </ul>
                <h4>Help</h4>
                <ul>
                    <li><span><FaArrowRight/></span><Link to='/'>Totorials</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>Knowledge base</Link></li>
                    <li><span><FaArrowRight/></span><Link to='/'>report online abuse</Link></li>
                </ul>
                <div className='social'>
                    <span><FaInstagram/></span>
                    <span><FaFacebook/></span>
                    <span><FaYoutube/></span>
                    <span><FaLinkedin/></span>
                    <span><FaTwitter/></span>
                </div>
            </motion.div>
        </footer>
        <motion.div className='bottom' variants={animate} initial='initial' whileInView='animate' transition={{delay: .2}}>
            <p>© 2004-2022 hostinger.in - India’s #1 Web Hosting & Domains provider</p>
            <p>Prices are listed without VAT</p>
        </motion.div>
    </div>
  )
}

export default Footer