import React from 'react'
import googleIcon from '../../assets/@.svg';
import {motion} from 'framer-motion';

import '../../styles/loginsection.scss';

const Login = () => {
  const animate = {
    initial: {x: '-100%', opacity: 0},
    animate: {x: 0, opacity: 1}
  }
  return (
    <section className='login_section'>
        <div className='conatainer'>
            <motion.h2 variants={animate} initial='initial' whileInView='animate' transition={{delay: .2}}>Log In</motion.h2>
            <div className='social'>
                <motion.div className='google' variants={animate} initial='initial' whileInView='animate' transition={{delay: .4}}>
                    <img src={googleIcon} alt='google'/>
                    <p>Login With Google</p>
                </motion.div>
                <motion.div className='facebook' variants={animate} initial='initial' whileInView='animate' transition={{delay: .6}}>
                    <img src={googleIcon} alt='google'/>
                    <p>Login With Facebook</p>
                </motion.div>
            </div>
            <motion.div className='divider' variants={animate} initial='initial' whileInView='animate' transition={{delay: .8}}>OR</motion.div>
            <div className='form'>
                <form>
                    <motion.div variants={animate} initial='initial' whileInView='animate' transition={{delay: .10}}>
                        <input type='text' placeholder='Email' id='email'/>
                    </motion.div>
                    <motion.div variants={animate} initial='initial' whileInView='animate' transition={{delay: .12}}>
                        <input type='text' placeholder='Password' id='password'/>
                    </motion.div>
                    <motion.div variants={animate} initial='initial' whileInView='animate' transition={{delay: .14}}>
                        <button>Log In</button>
                    </motion.div>
                </form>
                <motion.h3 variants={animate} initial='initial' whileInView='animate' transition={{delay: .16}}>Forgot Password ?</motion.h3>
            </div>
        </div>
    </section>
  )
}

export default Login