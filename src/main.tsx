import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  'c-soft-red': 'hsl(7, 99%, 70%)',
  'c-yellow': 'hsl(51, 100%, 49%)',
  'c-dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
  'c-dark-blue': 'hsl(198, 62%, 26%)',
  'c-dark-moderate-cyan': 'hsl(168, 34%, 41%)',

  'c-very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
  'c-very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
  'c-dark-grayish-blue': 'hsl(232, 10%, 55%)',
  'c-grayish-blue': 'hsl(210, 4%, 67%)',
  'c-white': 'hsl(0, 0%, 100%)',
};

const fonts = {
  barlow: 'Barlow, sans-serif',
  fraunces: 'Fraunces, serif',
};

const fontSizes = {
  sm: '16px',
  md: '18px',
  lg: '20px',
  xl: '22px',
  '2xl': '26px',
};

const theme = extendTheme({ colors, fonts, fontSizes });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
