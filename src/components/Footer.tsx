import React from 'react';
import LogoIcon from '../assets/logo.svg';
import FacebookIcon from '../assets/icon-facebook.svg';
import InstagramIcon from '../assets/icon-instagram.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import PinterestIcon from '../assets/icon-pinterest.svg';

const Links = [
  {
    name: 'About',
    link: '/',
  },
  {
    name: 'Services',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/',
  },
];

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className='bg-c-dark-moderate-cyan flex flex-col items-center justify-center py-10 md:py-20 md:gap-10'>
      <img src={LogoIcon} className='w-[180px]' alt='' />
      <ul className={`flex gap-10 md:gap-20`}>
        {Links.map((link) => (
          <li key={link.name} className='text-xl md:my-0 my-7'>
            <a
              className='md:text-c-white text-c-very-dark-desaturated-blue hover:text-c-dark-grayish-blue duration-500 cursor:pointer'
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex gap-5 mt-10'>
        <img className='hover:cursor-pointer' src={FacebookIcon} />
        <img className='hover:cursor-pointer' src={InstagramIcon} />
        <img className='hover:cursor-pointer' src={TwitterIcon} />
        <img className='hover:cursor-pointer' src={PinterestIcon} />
      </div>
    </div>
  );
}
