import React from 'react';
// import { Link } from 'react-router-dom';
import {FaCheck} from 'react-icons/fa';
import Hosting from './Hosting';
import Services from './Services';
import {motion} from 'framer-motion';

import '../../styles/herosection.scss';
import Domain from './Domain';
import Content from './Content';
import Panel from './Panel';

const Home = () => {
  const animate = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    }
  }
  return (
    <>
      <section className='hero_section'>
      {/* initial={{x: '-100%'}} whileInView={{x: 0}} */}
        <motion.main>
          <motion.h1 variants={animate} initial='initial' whileInView='animate' transition={{delay: .2}}>Savings to Set Your Website in Motion</motion.h1>
          <motion.h2 variants={animate} initial='initial' whileInView='animate' transition={{delay: .3}}><span>₹</span><span>149.00</span><span>/mo</span></motion.h2>
          <motion.p variants={animate} initial='initial' whileInView='animate' transition={{delay: .4}} className='para'>Make moves with a free domain and SSL included with a four-year subscription.</motion.p>
          <motion.div variants={animate} initial='initial' whileInView='animate' transition={{delay: .5}} className='timer'>
              <div className='count'>
                <span>00</span>
                <span>days</span>
              </div>
              <span>:</span>
              <div className='count'>
                <span>00</span>
                <span>hours</span>
              </div>
              <span>:</span>
              <div className='count'>
                <span>00</span>
                <span>minutes</span>
              </div>
              <span>:</span>
              <div className='count'>
                <span>00</span>
                <span>seconds</span>
              </div>
          </motion.div>
          <motion.a initial={{y: '-100%', opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .2, duration: 0}} href='#price' className='btn'>Get Started</motion.a>
          <motion.p variants={animate} initial='initial' whileInView='animate' transition={{delay: .7}}><span><FaCheck/></span>Get exclusive 30-day money-back guarantee</motion.p>
        </motion.main>
      </section>
      <Hosting/>
      <Services/>
      <Domain/>
      <Content/>
      <Panel/>
    </>
  )
}

export default Home