import React from 'react'
import {motion} from 'framer-motion';

import '../../styles/panelsection.scss';

const Panel = () => {
  const animate = {
    initail: {x: '-100%', opacity: 0},
    view: {x: 0, opacity: 1}
  }
  return (
    <>
        <section className='sectoin_panel'>
            <h2>User-Friendly Control Panel</h2>
            <div className='grid_tow_col'>
                <div className='video_box'>
                    <video src='https://assets.hostinger.com/videos/homepage2020/user-friendly-cp-2020-7ab2c70b24.mp4' muted autoPlay loop/>
                </div>
                <div className='content_box'>
                    <motion.div variants={animate} initial='initail' whileInView='view' transition={{delay: .2}}>
                        <img src='https://assets.hostinger.com/images/homepage2020/control-panel-section/user-icon-923934a391.svg' alt='user icon'/>
                        <h3>Ease of Use</h3>
                        <p>Hostinger Panel is extremely user-friendly and can be used by those with little experience in website development.</p>
                    </motion.div>
                    <motion.div variants={animate} initial='initail' whileInView='view' transition={{delay: .4}}>
                        <img src='https://assets.hostinger.com/images/homepage2020/control-panel-section/chart-icon-3472a5b9a8.svg' alt='user icon'/>
                        <h3>Powerful</h3>
                        <p>A wide variety of tools to satisfy advanced user and website developer needs.</p>
                    </motion.div>
                    <motion.div variants={animate} initial='initail' whileInView='view' transition={{delay: .6}}>
                        <img src='https://assets.hostinger.com/images/homepage2020/control-panel-section/wp-icon-9be267d135.svg' alt='user icon'/>
                        <h3>WordPress Optimized</h3>
                        <p>Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization stack and LiteSpeed cache.</p>
                    </motion.div>
                </div>
            </div>
        </section>
        <section className='moneyback_section'>
            <motion.h2 variants={animate} initial='initail' whileInView='view' transition={{delay: .2}}>30-Day Money-Back Guarantee</motion.h2>
            <motion.p variants={animate} initial='initail' whileInView='view' transition={{delay: .4}}>We'll refund your payment if you’re not 100% satisfied with Hostinger. No hassle, no risk.</motion.p>
            <motion.a href='#' initial={{y: '-100%', opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .6}}>Get Started</motion.a>
        </section>
    </>
  )
}

export default Panel