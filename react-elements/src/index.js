import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(
  container
);

const newH1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log('created ele:', newH1);

root.render(newH1);
