import React from 'react';
import HeroImg from '../assets/mobile/image-header.jpg';
import HeroDesktop from '../assets/desktop/image-header.jpg';
import ArrowDown from '../assets/icon-arrow-down.svg';

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className=''>
      <picture>
        <source srcSet={HeroDesktop} media='(min-width: 375px)' />
        <img className='z-[-10]' src={HeroImg} alt='Banner Main' />
      </picture>
      <div className='absolute top-40 md:top-56 md:left-[26rem]'>
        <div className='flex flex-col md:gap-20 gap-10 items-center justify-center text-center '>
          <h1 className='text-4xl md:text-6xl leading-[3rem] tracking-widest font-fraunces text-c-white'>
            WE ARE CREATIVES
          </h1>
          <img src={ArrowDown} alt='' />
        </div>
      </div>
    </div>
  );
}
