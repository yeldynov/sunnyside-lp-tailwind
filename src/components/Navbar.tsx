import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import LogoIcon from '../assets/logo.svg';
import Button from './Button';
import { Icon } from '@chakra-ui/icons';

type Props = {};

export default function Navbar({}: Props) {
  let Links = [
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

  const [open, setOpen] = useState(false);

  return (
    <div className='w-full absolute top-5 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-14 px-7'>
        <div className='cursor-pointer flex items-center'>
          <span className='mr-1 pt-2'>
            <img className='md:w-[200px]' src={LogoIcon} alt='' />
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-5 cursor-pointer md:hidden'
        >
          <Icon
            as={open ? CloseIcon : HamburgerIcon}
            boxSize={7}
            color='c-white'
          />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-c-white md:bg-transparent z-[1] md:z-auto w-5/6 md:w-auto md:pl-0 text-center transition-all duration-500 ease-in ${
            open
              ? 'top-20 opacity-100'
              : 'top-[-490px] md:opacity-100 opacity-0'
          } `}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-14 text-xl md:my-0 my-7'>
              <a
                className='md:text-c-white text-c-very-dark-desaturated-blue hover:text-c-dark-grayish-blue duration-500 cursor:pointer'
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>CONTACT</Button>
        </ul>
      </div>
    </div>
  );
}
