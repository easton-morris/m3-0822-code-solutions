import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  { id: 1, src: './images/Ahri_0.jpg', alt: 'Ahri' },
  { id: 2, src: './images/Akali_0.jpg', alt: 'Akali' },
  { id: 3, src: './images/Belveth_0.jpg', alt: 'Belveth' },
  { id: 4, src: './images/Diana_0.jpg', alt: 'Diana' },
  { id: 5, src: './images/Fiora_0.jpg', alt: 'Fiora' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images} />);
