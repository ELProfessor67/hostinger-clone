import React from 'react'
import {motion} from 'framer-motion';

import '../../styles/searchsection.scss';

const Domain = () => {

  const animation = {
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
        <section className='domain_section'>
            <motion.h2 variants={animation} initial='initial' whileInView='animate' transition={{delay: .2}}>Find the perfect domain name</motion.h2>
            <motion.p variants={animation} initial='initial' whileInView='animate' transition={{delay: .4}}>Enter domain name of your choice and motion.ick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)</motion.p>
            <motion.div className='search_box' variants={animation} initial='initial' whileInView='animate' transition={{delay: .6}}>
                <div>
                    <input type='text' placeholder='Type in that perfect domain name'/>
                </div>
                <button className='btn'>Search</button>
            </motion.div>
        </section>
    </>
  )
}

export default Domain