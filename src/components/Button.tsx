import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className='bg-c-yellow font-bold font-fraunces md:bg-c-white py-4 px-6 rounded-full md:ml-14 hover:bg-opacity-25 hover:text-c-white duration-500'>
      {children}
    </button>
  );
}
