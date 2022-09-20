import React, { useEffect, useState } from 'react'
import wordpress from '../../assets/wordpresslogo.svg';
import litespeed from '../../assets/litespeedlogo.svg';
import cloudflare from '../../assets/cloudflarelogo.svg';
import { Link } from 'react-router-dom';
import {FaCheck} from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

import '../../styles/hostingsection.scss';

const Hosting = () => {
  const [showAll, setShowAll] = useState(false);
  const [is990, setIs990] = useState(false);
  const [is600, setIs600] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(max-width: 990px)');
    matchMedia.matches ? setIs990(true) : setIs990(false);
    
    const updateMedia = (e) => {
      e.matches ? setIs990(true) : setIs990(false);
    }

    matchMedia.addEventListener('change',updateMedia);

    return () => {
      matchMedia.removeEventListener('change',updateMedia);
    }
  },[]);

  useEffect(() => {
    const matchMedia = window.matchMedia('(max-width: 600px)');
    matchMedia.matches ? setIs600(true) : setIs600(false);
    
    const updateMedia = (e) => {
      e.matches ? setIs600(true) : setIs600(false);
    }

    matchMedia.addEventListener('change',updateMedia);

    return () => {
      matchMedia.removeEventListener('change',updateMedia);
    }
  },[]);

  const animateContent = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    }
  }

  const showAnimation = {
    hidden: {
      height: 0,
      transition: {
        duretion: .5,
        when: 'afterChildren'
      }
    },
    show: {
      height: 'auto',
      transition: {
        duretion: .5,
        when: 'beforeChildren'
      }
    }
  }
  
  const ColumnAnimate = {
    hidden: {
      x: '-100%',
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1
    }
  }
  return (
    <>
      <section className='hosting_section'>
        <div className='logo_box'>
          <img src={wordpress} alt='wordpress logo'/>
          <img src={litespeed} alt='wordpress logo'/>
          <img src={cloudflare} alt='wordpress logo'/>
        </div>

        <div className='content'>
          <motion.h2 variants={animateContent} initial='initial' whileInView='animate' transition={{delay: .2}}>All-In-One Web Hosting</motion.h2>
          <motion.p variants={animateContent} initial='initial' whileInView={{opacity: .6, x: 0}} transition={{delay: .4}}>We prepared the best web hosting plan for you to start. You will be able to</motion.p>
          <motion.p variants={animateContent} initial='initial' whileInView={{opacity: .6, x: 0}} transition={{delay: .6}}>adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</motion.p>
        </div>

        <motion.div className='card' initial={{x: '-100%', opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: .8}}>
          <div>
            <h2>Best Web Hosting</h2>
          </div>

          <div>
            <div className='top_box'>
              <ul>
                <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
              </ul>
              <ul>
                  <div>
                    <h2><span>₹</span><span>149.00</span><span>/mo</span></h2>
                    <p>₹249.00/mo when you renew</p>  
                  </div>
                  <Link to='/' className='btn'>Select</Link>
              </ul>
              <ul>
                <li><span><FaCheck/></span><strong>Unlimited </strong><span>Free SSL &#x3F;</span></li>
                <li><span><FaCheck/></span><strong>Free </strong><span>Domain &#x3F;</span></li>
                <li><span><FaCheck/></span><strong>Free </strong><span>Email &#x3F;</span></li>
                <li><span><FaCheck/></span><strong>Optimized </strong><span>for WordPress &#x3F;</span></li>
              </ul>
            </div>
            <AnimatePresence>
            {
              showAll &&
              <motion.div className='bottom_box' variants={showAnimation} initial='hidden' animate='show' exit='hidden'>
                <h2>Plan Features</h2>
                <div className='top_box'>
                  <motion.ul variants={ColumnAnimate} transition={{delay: .2}}>
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                  </motion.ul>
                  <motion.ul variants={ColumnAnimate} transition={{delay: .4}}>
                    {
                      is990 &&
                      (<>
                        <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                        <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                      </>)
                    }
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                  </motion.ul>
                  <motion.ul variants={ColumnAnimate} transition={{delay: .6}}>
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                    <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                    <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                    {
                      is990 &&
                      (<>
                        <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                        <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                      </>)
                    }
                    {
                      is600 &&
                      (<>
                        <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                        <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                        <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                        <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Unmetered </strong><span>traffic (Unlimited GB) &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>100 </strong><span>Websites</span></li>
                        <li><span><FaCheck/></span><strong>100 GB </strong><span>SSD Storage &#x3F;</span></li>
                        <li><span><FaCheck/></span><strong>Free </strong><span> Weekly Backups &#x3F;</span></li>
                      </>)
                    }
                  </motion.ul>
                </div>
              </motion.div>
            }
            </AnimatePresence>
          </div>
          <div>
            <Link onClick={() => setShowAll(!showAll)}>{showAll ? 'See Less' : 'See All Features'}</Link>
          </div>
        </motion.div>

      </section>
    </>
  )
}

export default Hosting