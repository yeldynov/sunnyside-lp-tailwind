import React from 'react';
import EggImg from '../assets/mobile/image-transform.jpg';
import EggDesktop from '../assets/desktop/image-transform.jpg';
import GlassImg from '../assets/mobile/image-stand-out.jpg';
import GlassDesktop from '../assets/desktop/image-stand-out.jpg';
import CherryImg from '../assets/mobile/image-graphic-design.jpg';
import CherryDesktop from '../assets/desktop/image-graphic-design.jpg';
import OrangeImg from '../assets/mobile/image-photography.jpg';
import OrangeDesktop from '../assets/desktop/image-photography.jpg';

type Props = {};

export default function About({}: Props) {
  return (
    <section id='about'>
      <div className='flex flex-col md:flex-row-reverse'>
        <picture className='flex-1'>
          <source srcSet={EggDesktop} media='(min-width: 375px)' />
          <img className='w-full' src={EggImg} alt='Transform Img' />
        </picture>
        <div className='flex-1'>
          <div className='md:w-3/5 w-4/5 md:text-left mx-auto text-center my-14 md:my-40 flex flex-col gap-5 md:gap-10'>
            <h1 className='text-3xl md:text-5xl font-fraunces text-c-very-dark-desaturated-blue font-bold'>
              Transform your brand
            </h1>
            <p className='text-c-dark-grayish-blue md:text-lg font-barlow'>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <button className='font-fraunces font-bold border-b-8 border-c-yellow md:w-1/4 w-1/2 self-center md:self-start'>
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <picture className='flex-1'>
          <source srcSet={GlassDesktop} media='(min-width: 375px)' />
          <img className='w-full' src={GlassImg} alt='Transform Img' />
        </picture>
        <div className='flex-1'>
          <div className='md:w-3/5 w-4/5 md:text-left mx-auto text-center my-14 md:my-40 flex flex-col gap-5 md:gap-10'>
            <h1 className='text-3xl md:text-5xl font-fraunces text-c-very-dark-desaturated-blue font-bold'>
              Stand out to the right audience
            </h1>
            <p className='text-c-dark-grayish-blue md:text-lg font-barlow'>
              Using a collaborative formula of designers, reaserchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>

            <button className='font-fraunces font-bold border-b-8 border-c-soft-red md:w-1/4 w-1/2 self-center md:self-start'>
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='relative flex-1'>
          <picture>
            <source srcSet={CherryDesktop} media='(min-width: 375px)' />
            <img className='w-full' src={CherryImg} alt='Transform Img' />
          </picture>
          <div className='absolute text-c-very-dark-desaturated-blue bottom-4 text-center md:mx-10 mx-3 flex flex-col gap-8 md:mb-20 mb-10'>
            <h2 className='md:text-4xl text-3xl font-fraunces'>
              Graphic Design
            </h2>
            <p className='md:mx-36 md:text-lg'>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potention clients'
              attention.
            </p>
          </div>
        </div>
        <div className='relative flex-1'>
          <picture>
            <source srcSet={OrangeDesktop} media='(min-width: 375px)' />
            <img className='w-full' src={OrangeImg} alt='Transform Img' />
          </picture>
          <div className='absolute text-c-very-dark-desaturated-blue bottom-4 text-center md:mx-10 mx-3 flex flex-col gap-8 md:mb-20 mb-10'>
            <h2 className='md:text-4xl text-3xl font-fraunces'>Photography</h2>
            <p className='md:mx-36 md:text-lg'>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
