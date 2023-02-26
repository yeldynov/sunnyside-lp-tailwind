import React from 'react';
import MilkImg from '../assets/mobile/image-gallery-milkbottles.jpg';
import MilkDesktop from '../assets/desktop/image-gallery-milkbottles.jpg';
import OrangeImg from '../assets/mobile/image-gallery-orange.jpg';
import OrangeDesktop from '../assets/desktop/image-gallery-orange.jpg';
import ConeImg from '../assets/mobile/image-gallery-cone.jpg';
import ConeDesktop from '../assets/desktop/image-gallery-cone.jpg';
import SugarImg from '../assets/mobile/image-gallery-sugar-cubes.jpg';
import SugarDesktop from '../assets/desktop/image-gallery-sugarcubes.jpg';

type Props = {};

export default function Gallery({}: Props) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1'>
      <div>
        <picture className='flex-1'>
          <source srcSet={MilkDesktop} media='(min-width: 375px)' />
          <img className='w-full' src={MilkImg} alt='Transform Img' />
        </picture>
      </div>
      <div>
        <picture className='flex-1'>
          <source srcSet={OrangeDesktop} media='(min-width: 375px)' />
          <img className='w-full' src={OrangeImg} alt='Transform Img' />
        </picture>
      </div>
      <div>
        <picture className='flex-1'>
          <source srcSet={ConeDesktop} media='(min-width: 375px)' />
          <img className='w-full' src={ConeImg} alt='Transform Img' />
        </picture>
      </div>
      <div>
        <picture className='flex-1'>
          <source srcSet={SugarDesktop} media='(min-width: 375px)' />
          <img className='w-full' src={SugarImg} alt='Transform Img' />
        </picture>
      </div>
    </div>
  );
}
