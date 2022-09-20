import React, { Fragment } from 'react';
import {FaSearch} from 'react-icons/fa';
import {RiCloseLine} from 'react-icons/ri';

const Languages = ({headerRef}) => {

  const closeBox = () => {
    headerRef.current.classList.remove('language_box_active');
  }
  
  const languagesData = [
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
    {
        flagClass: 'fi-in',
        country: 'India',
        language: 'English'
    },
  ]

  return (
    <div className='languages_container'>
        <div className='search_container'>
            <div className='search_box'>
                <input type='text' placeholder='Search'/>
                <span><FaSearch/></span>
            </div>
            <div>
                <span onClick={closeBox}><RiCloseLine/></span>
            </div>
        </div>
        <div className='languages_box'>
            {
                languagesData.map(({flagClass, country, language},i) => {
                    return(
                        <Fragment key={i}>
                            <div className='box'>
                                <span className={`fi ${flagClass}`}></span>
                                <span>{country}</span>
                                <span>{language}</span>
                            </div>
                        </Fragment>
                    );
                })
            }
        </div>
    </div>
  )
}

export default Languages