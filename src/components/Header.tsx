import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
// import HamburgerIcon from '../assets/icon-hamburger.svg';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
type Props = {};

export default function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-transparent'>
      <nav className='flex justify-between items-center mx-10 py-10 w-[92%] absolute top-0'>
        <div>
          <img src={Logo} alt='Logo image' />
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } desk:block desk:static desk:min-h-fit desk:w-auto absolute min-h-[60vh] left-0 top-[150%] w-full`}
        >
          <ul className='flex desk:flex-row flex-col items-center gap-8 text-c-very-dark-desaturated-blue desk:text-c-white'>
            <li>
              <a className='hover:text-c-soft-red' href='#'>
                About
              </a>
            </li>
            <li>
              <a className='hover:text-c-soft-red' href='#'>
                Services
              </a>
            </li>
            <li>
              <a className='hover:text-c-soft-red' href='#'>
                Projects
              </a>
            </li>
            <li>
              <button className='bg-c-yellow font-fraunces text-c-very-dark-desaturated-blue font-bold desk:bg-c-white rounded-full px-5 py-3 hover:bg-opacity-20 hover:text-c-white'>
                CONTACT
              </button>
            </li>
          </ul>
        </div>
        <div className='flex items-center desk:hidden'>
          <Icon
            onClick={onToggleMenu}
            as={isMenuOpen ? CloseIcon : HamburgerIcon}
            boxSize={8}
            alt=''
          />
        </div>
      </nav>
    </header>
  );
}
