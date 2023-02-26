import React from 'react';
import AvatarEmily from '../assets/image-emily.jpg';
import AvatarThomas from '../assets/image-thomas.jpg';
import AvatarJennie from '../assets/image-jennie.jpg';
type Props = {};

interface Testimonial {
  image: string;
  message: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    image: AvatarEmily,
    message:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    position: 'Marketing Director',
  },
  {
    image: AvatarThomas,
    message:
      'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    position: 'Chief Operating Officer',
  },
  {
    image: AvatarJennie,
    message:
      'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    position: 'Business Owner',
  },
];

export default function Testimonials({}: Props) {
  return (
    <section id='testimonials' className='flex flex-col gap-14 my-16 md:my-32'>
      <h1 className='text-center tracking-widest text-c-dark-grayish-blue text-xl font-fraunces'>
        CLIENT TESTIMONIALS
      </h1>
      <div className='flex flex-col gap-20 md:flex-row md:mx-20'>
        {testimonials.map((t) => (
          <div
            className='flex flex-col gap-10 font-barlow text-center mx-10 items-center justify-center text-c-very-dark-desaturated-blue'
            key={t.name}
          >
            <img className='rounded-full w-20' src={t.image} alt='' />
            <p>{t.message}</p>
            <div className='flex flex-col gap-2'>
              <h2 className='font-fraunces text-xl'>{t.name}</h2>
              <h3 className='text-c-dark-grayish-blue'>{t.position}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
