import React, { Fragment } from 'react'
import { motion } from 'framer-motion';

import '../../styles/servicesection.scss';

const Services = () => {
  const servicesData = [
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/free-ssl-c672bc7cfb.svg',
        name: 'Free SSL',
        delay: .12
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/access-management-01f91d3436.svg',
        name: 'Access Management',
        delay: .11
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/ecommerce-c7adac5be7.svg',
        name: 'eCommerce Optimization',
        delay: .10
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/free-migration-913e6bfab2.svg',
        name: 'Free Migration',
        delay: .9
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/backups-2d6e895cf1.svg',
        name: 'Automated backups',
        delay: .8
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/cloudflare-d1bcbdabc9.svg',
        name: 'DDoS Protection',
        delay: .7
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/php-speed-boost-f7850027dc.svg',
        name: 'PHP Speed Boost',
        delay: .6
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/litespeed-wp-module-e0e9453f3c.svg',
        name: 'LiteSpeed Cache Plugin',
        delay: .5
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/wp-installation-2161a49ee3.svg',
        name: 'One-Click WordPress Installation',
        delay: .4
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/tech-support-ebf15a3d83.svg',
        name: '24/7/365 Tech Support',
        delay: .3
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/script-installer-6fe9e03c5c.svg',
        name: 'Auto Script Installer',
        delay: .4
    },
    {
        image: 'https://assets.hostinger.com/images/homepage2021/services/uptime-guarantee-1e9eae1cb0.svg',
        name: '99.9% Uptime Guarantee',
        delay: .2
    }
  ]
  return (
    <>
        <section className='service_section'>
            <motion.h2 initial={{x: '-100%', opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: .2}}>Our services include:</motion.h2>
            <div className='service_box'>
                {
                    servicesData.map(({image, name,delay},i) => {
                        return(
                            <Fragment key={i}>
                                <motion.div initial={{x: '-100%', opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay}}>
                                    <img src={image} alt='free ssl logo'/>
                                    <p>{name}</p>
                                </motion.div>
                            </Fragment>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Services