import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';


import '../../styles/contentsection.scss';

const Content = () => {
  const Data = [
    {
        sub_head: 'EASY TO USE AND SIMPLE',
        head: 'Easy to set up',
        para: 'Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.',
        link: '/',
        video: 'https://assets.hostinger.com/videos/homepage2020/easy-to-set-up-6e4616539f.mp4',
        even: false
    },
    {
        sub_head: 'PERFORMANCE AND SPEED',
        head: 'Lightning-fast websites',
        para: 'Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website.',
        link: '/',
        video: 'https://assets.hostinger.com/videos/homepage2020/simply-fast-websites-ad53591419.mp4',
        even: true
    },
    {
        sub_head: 'GREAT WORDPRESS EXPERIENCE',
        head: 'WordPress made easy',
        para: 'Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure.',
        link: '/',
        video: 'https://assets.hostinger.com/videos/homepage2020/wordpress-made-easy-f182af6a28.mp4',
        even: false
    },
    {
        sub_head: 'PROFESSIONAL AND HANDS-ON',
        head: '24/7 Support',
        para: 'Our team of experts will solve technical issues to get your websites up and running. Anytime.',
        link: '/',
        video: 'https://assets.hostinger.com/videos/homepage2020/chat-support-24-7-f281e75a32.mp4',
        even: true
    },
    {
        sub_head: 'FLEXIBLE AND SCALABLE',
        head: 'From micro to large-scale',
        para: 'Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows.',
        link: '/',
        video: 'https://assets.hostinger.com/videos/homepage2020/scale-from-micro-to-large-scale-54c553ecb0.mp4',
        even: false
    },
  ]

  const animateContent = {
    initial: {x: '-100%', opacity: 0},
    whileInView: {x: 0, opacity: 1}
  }
  const animateEvencontent = {
    initial: {x: '100%', opacity: 0},
    whileInView: {x: 0, opacity: 1}
  }
  return (
    <>
        <section className='contant_section'>
            {
                Data.map(({sub_head, head, para, link, video, even},i) => {
                    // let even = (i+1)/2 === 0 ? true : false ;
                    return(
                        <Fragment key={i}>
                            {
                                !even ? (
                                    <>
                                        <div className='content_box'>
                                            {/* left side */}
                                            <div className='context'>
                                                <motion.h3 variants={animateContent} initial='initial' whileInView='whileInView' transition={{delay: .2}}>{sub_head}</motion.h3>
                                                <motion.h2 variants={animateContent} initial='initial' whileInView='whileInView' transition={{delay: .4}}>{head}</motion.h2>
                                                <motion.p variants={animateContent} initial='initial' whileInView='whileInView' transition={{delay: .6}}>{para}</motion.p>
                                                <motion.a variants={animateContent} initial='initial' whileInView='whileInView' transition={{delay: .8}} to={link}>Learn more</motion.a>
                                            </div>

                                            {/* right side  */}
                                            <motion.div initial={{y: '-100%', opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .5}} className='video'>
                                                <video src={video} muted loop autoPlay/>
                                            </motion.div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='content_box'>
                                            {/* right side  */}
                                            <motion.div className='video bottom_box' initial={{y: '-100%', opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: .5}}>
                                                <video src={video} muted loop autoPlay/>
                                            </motion.div>

                                            {/* left side */}
                                            <div className='context top_box'>
                                                <motion.h3 variants={animateContent} initial='initial' whileInView='whileInView' transition={{delay: .2}}>{sub_head}</motion.h3>
                                                <motion.h2 variants={animateContent} initial='initial' whileInView='whileInView' transition={{delay: .4}}>{head}</motion.h2>
                                                <motion.p variants={animateContent} initial='initial' whileInView='whileInView' transition={{delay: .6}}>{para}</motion.p>
                                                <motion.a variants={animateContent} initial='initial' whileInView='whileInView' transition={{delay: .8}}>Learn more</motion.a>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </Fragment>
                    )
                })
            }
        </section>
    </>
  )
}

export default Content